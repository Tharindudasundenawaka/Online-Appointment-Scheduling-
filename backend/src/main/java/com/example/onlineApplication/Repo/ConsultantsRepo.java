package com.example.onlineApplication.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.onlineApplication.model.ConsultantData;

@Repository
public interface ConsultantsRepo extends JpaRepository<ConsultantData, Integer> {
	ConsultantData save(String user);
}


