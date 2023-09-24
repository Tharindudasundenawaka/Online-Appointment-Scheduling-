package com.example.onlineApplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.onlineApplication.Repo.ConsultantsRepo;
import com.example.onlineApplication.model.ConsultantData;

@Service
public class ConsultantService {
	@Autowired
	private ConsultantsRepo consultantRepository;

	public List<ConsultantData> getAllConsultants() {
		return consultantRepository.findAll();
	}

	public ConsultantData getConsultantById(int id) {
		Optional<ConsultantData> consultant = consultantRepository.findById(id);
		return consultant.orElse(null);
	}

	public ConsultantData createConsultant(ConsultantData consultant) {

		return consultantRepository.save(consultant);
	}

	public ConsultantData updateConsultant(int id, ConsultantData updatedConsultant) {
		Optional<ConsultantData> existingConsultantOptional = consultantRepository.findById(id);

		if (existingConsultantOptional.isPresent()) {
			ConsultantData existingConsultant = existingConsultantOptional.get();

			existingConsultant.setUsername(updatedConsultant.getUsername());
			existingConsultant.setUserType(updatedConsultant.getUserType());
			existingConsultant.setPassword(updatedConsultant.getPassword());
			existingConsultant.setPhoneNumber(updatedConsultant.getPhoneNumber());

			return consultantRepository.save(existingConsultant);
		} else {

			return null;
		}
	}

	public void deleteConsultant(int id) {
		consultantRepository.deleteById(id);
	}
}
