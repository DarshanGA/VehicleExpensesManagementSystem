CREATE TABLE fuel_types(
    id SERIAL,
    name TEXT NOT NULL UNIQUE,
    CONSTRAINT fuel_types_id_pk PRIMARY KEY (id)
);