import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endpoints } from "../api.endpoints";
import { VehicleTypes } from "../models/vehicle-types.model";
import { FuelTypes } from "../models/fuel-types.model";

@Injectable({providedIn: "root"})
export class VCFDropdownDataService{

    constructor(private http: HttpClient){}

    getAllVehicleTypes(): Observable<VehicleTypes[]>{

        return this.http.get<VehicleTypes[]>(Endpoints.getVehicleTypesEndpoint());
    }

    getAllFuelTypes(): Observable<FuelTypes[]>{

        return this.http.get<FuelTypes[]>(Endpoints.getFuelTypesEndpoint());
    }
}