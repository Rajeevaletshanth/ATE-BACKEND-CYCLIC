/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS public.table
(
    id SERIAL PRIMARY KEY,
    table_no INTEGER NOT NULL,
    restaurant_id INTEGER NOT NULL,
    table_type CHARACTER VARYING,
    seat_count INTEGER NOT NULL,
    is_booked BOOLEAN DEFAULT false,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    UNIQUE (restaurant_id, table_no) 
);