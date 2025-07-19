package com.jarc.vems_api.model;

public class VehicleType {

    private int id;
    private String name;

    public VehicleType(int givenId, String givenName){

        this.id = givenId;
        this.name = givenName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
