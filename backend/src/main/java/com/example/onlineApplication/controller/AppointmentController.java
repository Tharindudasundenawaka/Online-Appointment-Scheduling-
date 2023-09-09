package com.example.onlineApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.onlineApplication.model.AppointmentData;
import com.example.onlineApplication.model.JobseekerData;
import com.example.onlineApplication.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {
	@Autowired
	private AppointmentService appointmentService; // You need to create AppointmentService class

	@GetMapping
	public Iterable<JobseekerData> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}

	@GetMapping("/{id}")
	public AppointmentData getAppointmentById(@PathVariable int id) {
		return appointmentService.getAppointmentById(id);
	}

	@PostMapping
	public AppointmentData createAppointment(@RequestBody AppointmentData appointment) {
		return appointmentService.createAppointment(appointment);
	}

	@PutMapping("/{id}")
	public AppointmentData updateAppointment(@PathVariable int id, @RequestBody AppointmentData appointment) {
		return appointmentService.updateAppointment(id, appointment);
	}

	@DeleteMapping("/{id}")
	public void deleteAppointment(@PathVariable int id) {
		appointmentService.deleteAppointment(id);
	}

}

