/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS public.kitchen
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    authority VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_no VARCHAR(15),
    password VARCHAR(100) NOT NULL,
    description VARCHAR(500),
    min_amount VARCHAR(50),
    offer_type VARCHAR(50),
    offer_value VARCHAR(50),
    max_delivery_time VARCHAR(20),
    vegetarian BOOLEAN DEFAULT false,
    avatar VARCHAR(200),
    opening_time VARCHAR(20) NOT NULL,
    closing_time VARCHAR(20) NOT NULL,
    cuisines VARCHAR(200),
    delivery_type VARCHAR(100),
    location VARCHAR(200) NOT NULL,
    terms_and_conditions BOOLEAN DEFAULT false,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);