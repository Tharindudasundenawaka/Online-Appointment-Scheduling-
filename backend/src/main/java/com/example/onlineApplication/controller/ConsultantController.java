package com.example.onlineApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.onlineApplication.model.ConsultantData;
import com.example.onlineApplication.service.ConsultantService;

@RestController
@RequestMapping("/consultants")
public class ConsultantController {
	@Autowired
	private ConsultantService consultantService;

	@GetMapping
	public List<ConsultantData> getAllConsultants() {
		return consultantService.getAllConsultants();
	}

	@GetMapping("/{id}")
	public ConsultantData getConsultantById(@PathVariable int id) {
		return consultantService.getConsultantById(id);
	}

	@PostMapping
	public ConsultantData createConsultant(@RequestBody ConsultantData consultant) {
		return consultantService.createConsultant(consultant);
	}

	@PutMapping("/{id}")
	public ConsultantData updateConsultant(@PathVariable int id, @RequestBody ConsultantData consultant) {
		return consultantService.updateConsultant(id, consultant);
	}

	@DeleteMapping("/{id}")
	public void deleteConsultant(@PathVariable int id) {
		consultantService.deleteConsultant(id);
	}


}
