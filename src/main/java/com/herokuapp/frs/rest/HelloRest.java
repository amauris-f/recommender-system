package com.herokuapp.frs.rest;

import com.herokuapp.frs.recommendersystem.HelloObject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloRest {

	@GetMapping("hello")
	public HelloObject hello() {
		return new HelloObject();
	}
}
