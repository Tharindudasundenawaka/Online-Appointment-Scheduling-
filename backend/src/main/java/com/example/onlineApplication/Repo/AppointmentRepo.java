package com.example.onlineApplication.Repo;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.onlineApplication.model.AppointmentData;
import com.example.onlineApplication.model.JobseekerData;

@Repository
public interface AppointmentRepo extends CrudRepository<JobseekerData, Integer> {

	@Override
	public default Iterable<JobseekerData> findAll() {

		return null;
	}

	public default Optional<AppointmentData> findById(int id) {

		return null;
	}

	public default AppointmentData save(AppointmentData appointment) {

		return null;
	}

	public default void deleteById(int id) {

	}

}
