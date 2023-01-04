/* Replace with your SQL commands */

ALTER TABLE public.table DROP COLUMN is_booked;

CREATE TABLE IF NOT EXISTS public.table_reservation
(
    id SERIAL PRIMARY KEY,
    restaurant_id INTEGER NOT NULL,
    table_ids CHARACTER VARYING NOT NULL,   
    customer_name CHARACTER VARYING NOT NULL,
    customer_phone CHARACTER VARYING NOT NULL,
    customer_email CHARACTER VARYING,
    guests_count INTEGER NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_from TIME NOT NULL,
    reservation_to TIME NOT NULL,
    note CHARACTER VARYING,
    status CHARACTER VARYING,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    CONSTRAINT FK_RestaurantReservation FOREIGN KEY (restaurant_id)
    REFERENCES public.kitchen(id)
);