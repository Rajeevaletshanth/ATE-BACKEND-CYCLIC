/* Replace with your SQL commands */
-- Table: public.admin

-- DROP TABLE IF EXISTS public.admins;

CREATE TABLE IF NOT EXISTS public.currency
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    code VARCHAR(10) NOT NULL,
    status INTEGER NOT NULL,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);


-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public.currency
--     OWNER to postgres;