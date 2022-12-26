/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS public.top_brands
(
    id SERIAL PRIMARY KEY,
    restaurant_id INTEGER UNIQUE NOT NULL,
    top_brand BOOLEAN default true,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);