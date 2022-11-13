/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS public.cuisines
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(200),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);