CREATE OR REPLACE FUNCTION get_all_vehicle_types()
RETURNS TABLE(id INT, name TEXT)
LANGUAGE plpgsql
AS $$

BEGIN 

RETURN QUERY
SELECT id, name FROM vehicle_types;
END;
$$;