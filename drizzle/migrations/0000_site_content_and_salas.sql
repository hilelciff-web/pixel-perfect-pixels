-- roles
create type public.app_role as enum ('admin');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create policy "users read own roles" on public.user_roles
for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

-- first signed-up user becomes admin
create or replace function public.grant_first_admin()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.user_roles where role = 'admin') then
    insert into public.user_roles (user_id, role) values (new.id, 'admin')
    on conflict do nothing;
  end if;
  return new;
end;
$$;

create trigger on_auth_user_created_grant_admin
after insert on auth.users
for each row execute function public.grant_first_admin();

-- site settings (single row)
create table public.site_settings (
  id text primary key default 'main',
  hero_eyebrow text not null default 'Galeria de Saúde · Rio Branco — AC',
  hero_title_line1 text not null default 'Saúde em sua',
  hero_title_line2 text not null default 'melhor forma.',
  hero_subtitle text not null default 'Um ecossistema de clínicas independentes unidas pelo design, bem-estar e excelência técnica.',
  hero_image_url text not null default '/assets/mosantt-hero.jpg',
  about_title text not null default 'Um novo conceito em Rio Branco',
  about_text text not null default 'O Edifício Mosantt foi concebido para abrigar os melhores especialistas do Acre. Um ambiente que transcende o hospitalar, oferecendo uma experiência de galeria de arte aplicada ao cuidado pessoal.',
  tour_title text not null default 'Uma visita guiada ao espaço.',
  tour_text text not null default 'Percorra o edifício e entenda como a Mosantt funciona: salas independentes, áreas comuns compartilhadas, recepção, estacionamento privativo e uma atmosfera pensada para acolher pacientes e profissionais.',
  tour_video_url text not null default '/assets/mosantt-tour.mp4',
  whatsapp_url text not null default 'https://wa.me/',
  instagram_url text not null default 'https://instagram.com/mosantt',
  address_line1 text not null default 'Estrada Dias Martins, nº 1303',
  address_line2 text not null default 'Jardim de Alah, Rio Branco — AC',
  maps_url text not null default 'https://www.google.com/maps/search/?api=1&query=Estrada+Dias+Martins+1303+Jardim+de+Alah+Rio+Branco',
  updated_at timestamptz not null default now()
);

grant select on public.site_settings to anon;
grant select, insert, update on public.site_settings to authenticated;
grant all on public.site_settings to service_role;
alter table public.site_settings enable row level security;

create policy "site settings public read" on public.site_settings for select to anon, authenticated using (true);
create policy "admins update site settings" on public.site_settings for update to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create policy "admins insert site settings" on public.site_settings for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));

insert into public.site_settings (id) values ('main');

-- salas
create table public.salas (
  id uuid primary key default gen_random_uuid(),
  numero text not null unique,
  ordem int not null default 0,
  status text not null default 'Disponível',
  ocupante text,
  especialidade text,
  nota text,
  instagram text,
  site text,
  whatsapp text,
  updated_at timestamptz not null default now()
);

grant select on public.salas to anon;
grant select, insert, update, delete on public.salas to authenticated;
grant all on public.salas to service_role;
alter table public.salas enable row level security;

create policy "salas public read" on public.salas for select to anon, authenticated using (true);
create policy "admins write salas" on public.salas for all to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

insert into public.salas (numero, ordem, status, nota) values
  ('01', 1, 'Disponível', 'Sala pronta para profissional de saúde ou estética.'),
  ('02', 2, 'Disponível', 'Ideal para consultório clínico ou terapias.'),
  ('03', 3, 'Disponível', 'Ambiente iluminado, configuração flexível.'),
  ('04', 4, 'Disponível', 'Espaço reservado para nova clínica ou estúdio.');

insert into public.salas (numero, ordem, status, ocupante, especialidade, nota, instagram, site, whatsapp) values
  ('05', 5, 'Ocupada', 'Dr. Alisson Mota Rabelo', 'Ortodontia · Invisalign®',
   'Especialista em Ortodontia, N°1 em alinhadores Invisalign® no Acre. Implantes e lentes de porcelana.',
   'https://instagram.com/dralisonmota', 'https://dr-alison-prototipo.web.app/#inicio', null);
