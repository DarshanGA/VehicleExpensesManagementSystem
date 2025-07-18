CREATE TABLE expenses_types(
    id SERIAL,
    name TEXT NOT NULL UNIQUE,
    CONSTRAINT expenses_types_id_pk PRIMARY KEY (id)
);