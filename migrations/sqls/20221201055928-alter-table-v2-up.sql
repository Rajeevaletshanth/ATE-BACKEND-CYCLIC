/* Replace with your SQL commands */

ALTER TABLE public.combo_menu ADD restaurant_id INTEGER;
ALTER TABLE public.addons DROP COLUMN product_id;
ALTER TABLE public.addons ADD restaurant_id INTEGER, ADD addons_id INTEGER;
ALTER TABLE public.promotion ADD restaurant_id INTEGER;
ALTER TABLE public.promocodes ADD restaurant_id INTEGER;
ALTER TABLE public.qrcode ADD restaurant_id INTEGER;