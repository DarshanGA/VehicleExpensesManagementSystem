package com.jarc.vems_api.mappers;

import com.jarc.vems_api.model.VehicleType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class VehicleTypesMapper implements RowMapper<VehicleType> {

    @Override
    public VehicleType mapRow(ResultSet rs, int rowNum) throws SQLException {

        return new VehicleType(rs.getInt("id"), rs.getString("name"));
    }
}
