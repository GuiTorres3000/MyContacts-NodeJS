CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    category_id UUID,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

