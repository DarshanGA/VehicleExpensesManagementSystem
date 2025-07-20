export class Endpoints{

    private static baseUrl = "http://localhost:8080/api";
    private static vehicleTypesEndpoint = "/vehicles/vehicle-types";
    private static fuelTypesEndpoint = "/vehicles/fuel-types";

    public static getVehicleTypesEndpoint(): string{

        return this.baseUrl + this.vehicleTypesEndpoint;
    }

    public static getFuelTypesEndpoint(): string{

        return this.baseUrl + this.fuelTypesEndpoint;
    }
}