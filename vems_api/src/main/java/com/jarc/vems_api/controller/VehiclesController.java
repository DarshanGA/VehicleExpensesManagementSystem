package com.jarc.vems_api.controller;

import com.jarc.vems_api.model.FuelType;
import com.jarc.vems_api.model.VehicleType;
import com.jarc.vems_api.repository.VehiclesRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehiclesController {

    private final VehiclesRepository vehiclesRepo;

    public VehiclesController(VehiclesRepository givenVehicleRepo){

        this.vehiclesRepo = givenVehicleRepo;
    }

    @GetMapping("/vehicle-types")
    public List<VehicleType> getAllVehicleTypes(){

        return vehiclesRepo.findAllVehicleTypes();
    }

    @GetMapping("/fuel-types")
    public List<FuelType> getAllFuelTypes(){

        return vehiclesRepo.findAllFuelTypes();
    }
}
