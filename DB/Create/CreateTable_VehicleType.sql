CREATE TABLE vehicle_types(
    id SERIAL,
    name TEXT NOT NULL UNIQUE,
    CONSTRAINT vehicle_types_id_pk PRIMARY KEY (id)
);