package com.example.onlineApplication.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.onlineApplication.model.JobseekerData;

@Repository
public interface JobseekerRepo extends CrudRepository<JobseekerData, Integer> {


	@Override
	public default List<JobseekerData> findAll() {

		return null;
	}

	public default Optional<JobseekerData> findById(int id) {

		return null;
	}

	@Override
	public default JobseekerData save(JobseekerData existingJobSeeker) {
		return null;
	}

	public default JobseekerData deleteById(int id) {
		return null;
	}
}
