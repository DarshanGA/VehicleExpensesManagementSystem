CREATE TABLE owened_status(
    id SERIAL,
    name TEXT NOT NULL UNIQUE,
    CONSTRAINT owened_status_id_pk PRIMARY KEY (id)
);