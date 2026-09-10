create policy "site media readable" on storage.objects
for select to anon, authenticated using (bucket_id = 'site-media');

create policy "admins upload site media" on storage.objects
for insert to authenticated with check (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));

create policy "admins update site media" on storage.objects
for update to authenticated using (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));

create policy "admins delete site media" on storage.objects
for delete to authenticated using (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));
