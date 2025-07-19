package com.jarc.vems_api.model;

public class FuelType {

    private int id;
    private String name;

    public FuelType(int givenId, String givenName){

        this.id = givenId;
        this.name = givenName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
