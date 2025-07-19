CREATE OR REPLACE FUNCTION get_all_fuel_types()
RETURNS TABLE(id, name)
LANGUAGE plpgsql
AS $$

BEGIN 

RETURN QUERY
SELECT id, name FROM vehicle_types;
END;
$$;