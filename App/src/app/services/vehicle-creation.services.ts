import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endpoints } from "../api.endpoints";
import { VehicleType } from "../models/vehicle-type.model";
import { FuelType } from "../models/fuel-type.model";

@Injectable({providedIn: "root"})
export class VCFDropdownDataService{

    constructor(private http: HttpClient){}

    getAllVehicleTypes(): Observable<VehicleType[]>{

        return this.http.get<VehicleType[]>(Endpoints.getVehicleTypesEndpoint());
    }

    getAllFuelTypes(): Observable<FuelType[]>{

        return this.http.get<FuelType[]>(Endpoints.getFuelTypesEndpoint());
    }
}