import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";

export type SiteSettings = Database["public"]["Tables"]["site_settings"]["Row"];
export type Sala = Database["public"]["Tables"]["salas"]["Row"];

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const getSiteContent = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = publicClient();
  const [{ data: settings }, { data: salas }] = await Promise.all([
    supabase.from("site_settings").select("*").eq("id", "main").maybeSingle(),
    supabase.from("salas").select("*").order("ordem", { ascending: true }),
  ]);

  const resolve = async (value: string) => {
    if (!value.startsWith("site-media/")) return value;
    const path = value.slice("site-media/".length);
    const { data } = await supabase.storage
      .from("site-media")
      .createSignedUrl(path, 60 * 60 * 24 * 7);
    return data?.signedUrl ?? value;
  };

  if (settings) {
    settings.hero_image_url = await resolve(settings.hero_image_url);
    settings.tour_video_url = await resolve(settings.tour_video_url);
  }

  return { settings: settings ?? null, salas: salas ?? [] };
});

type SettingsInput = Partial<Omit<SiteSettings, "id" | "updated_at">>;

export const updateSiteSettings = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: SettingsInput) => data)
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("site_settings")
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq("id", "main");
    if (error) throw new Error(error.message);
    return { ok: true };
  });

type SalaInput = {
  id: string;
  status: string;
  ocupante: string | null;
  especialidade: string | null;
  nota: string | null;
  instagram: string | null;
  site: string | null;
  whatsapp: string | null;
};

export const updateSala = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: SalaInput) => data)
  .handler(async ({ data, context }) => {
    const { id, ...fields } = data;
    const { error } = await context.supabase
      .from("salas")
      .update({ ...fields, updated_at: new Date().toISOString() })
      .eq("id", id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const getIsAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    return { isAdmin: data === true };
  });
