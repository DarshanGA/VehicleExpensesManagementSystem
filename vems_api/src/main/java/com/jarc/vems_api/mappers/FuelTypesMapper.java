package com.jarc.vems_api.mappers;

import com.jarc.vems_api.model.FuelType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FuelTypesMapper implements RowMapper<FuelType> {
    @Override
    public FuelType mapRow(ResultSet rs, int rowNum) throws SQLException {

        return new FuelType(rs.getInt("id"), rs.getString("name"));
    }
}
