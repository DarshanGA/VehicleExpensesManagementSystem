CREATE OR REPLACE FUNCTION get_all_fuel_types()
RETURNS TABLE(id INT, name TEXT)
LANGUAGE plpgsql
AS $$

BEGIN 

RETURN QUERY
SELECT id, name FROM fueld_types;
END;
$$;