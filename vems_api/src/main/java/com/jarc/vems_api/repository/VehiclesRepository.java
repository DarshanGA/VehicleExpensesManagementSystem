package com.jarc.vems_api.repository;

import com.jarc.vems_api.mappers.FuelTypesMapper;
import com.jarc.vems_api.mappers.VehicleTypesMapper;
import com.jarc.vems_api.model.FuelType;
import com.jarc.vems_api.model.VehicleType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class VehiclesRepository {

    private final JdbcTemplate jdbc;

    private static String getAllVehicleTypeDbFunction = "get_all_vehicle_types()",
            selectAllFromSqlStatement = "SELECT * FROM ",
            getAllFuelTypesDbFunction = "get_all_fuel_types()";

    public VehiclesRepository(JdbcTemplate givenTemplate){

        this.jdbc = givenTemplate;
    }

    public List<VehicleType> findAllVehicleTypes(){

        String sql = selectAllFromSqlStatement + getAllVehicleTypeDbFunction;
        return jdbc.query(sql, new VehicleTypesMapper());
    }

    public List<FuelType> findAllFuelTypes(){

        String sql = selectAllFromSqlStatement + getAllFuelTypesDbFunction;
        return jdbc.query(sql, new FuelTypesMapper());
    }
}
