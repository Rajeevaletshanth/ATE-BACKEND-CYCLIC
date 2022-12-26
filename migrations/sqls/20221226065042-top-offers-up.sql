/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS public.top_offers
(
    id SERIAL PRIMARY KEY,
    item_id INTEGER NOT NULL,
    type CHARACTER VARYING NOT NULL,
    top_offer BOOLEAN default true,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    UNIQUE (item_id, type) 
);