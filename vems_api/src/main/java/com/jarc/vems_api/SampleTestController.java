package com.jarc.vems_api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleTestController {

    @GetMapping("/hello")
    public String sayHello(){

        return "Hello World!";
    }
}
