/* Replace with your SQL commands */

ALTER TABLE public.order DROP COLUMN price;
ALTER TABLE public.order ALTER COLUMN status TYPE VARCHAR(100);