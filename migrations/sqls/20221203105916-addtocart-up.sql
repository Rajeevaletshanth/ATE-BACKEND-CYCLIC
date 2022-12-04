/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS public.addtocart
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    restaurant_id INTEGER,
    product_id INTEGER,
    addons VARCHAR(1000),
    qty INTEGER,
    status BOOLEAN DEFAULT false,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);