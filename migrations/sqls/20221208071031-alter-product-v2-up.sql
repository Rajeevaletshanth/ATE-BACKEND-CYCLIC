/* Replace with your SQL commands */

ALTER TABLE public.product DROP COLUMN is_addons;
ALTER TABLE public.product ADD addons CHARACTER VARYING;
ALTER TABLE public.order DROP COLUMN product_id, DROP COLUMN restaurant_id, DROP COLUMN quantity;