package com.example.onlineApplication.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.onlineApplication.Repo.AppointmentRepo;
import com.example.onlineApplication.model.AppointmentData;
import com.example.onlineApplication.model.JobseekerData;

@Service
public class AppointmentService {
	@Autowired
	private AppointmentRepo appointmentRepository;

	public Iterable<JobseekerData> getAllAppointments() {
		return appointmentRepository.findAll();
	}

	public AppointmentData getAppointmentById(int id) {
		Optional<AppointmentData> appointment = appointmentRepository.findById(id);
		return appointment.orElse(null);
	}

	public AppointmentData createAppointment(AppointmentData appointment) {

		return appointmentRepository.save(appointment);
	}

	public AppointmentData updateAppointment(int id, AppointmentData updatedAppointment) {
		Optional<AppointmentData> existingAppointmentOptional = appointmentRepository.findById(id);

		if (existingAppointmentOptional.isPresent()) {
			AppointmentData existingAppointment = existingAppointmentOptional.get();

			existingAppointment.setConsultant(updatedAppointment.getConsultant());
			existingAppointment.setJobSeeker(updatedAppointment.getJobSeeker());
			existingAppointment.setAppointmentDateTime(updatedAppointment.getAppointmentDateTime());

			return appointmentRepository.save(existingAppointment);
		} else {

			return null;
		}
	}

	public void deleteAppointment(int id) {
		appointmentRepository.deleteById(id);
	}
}

