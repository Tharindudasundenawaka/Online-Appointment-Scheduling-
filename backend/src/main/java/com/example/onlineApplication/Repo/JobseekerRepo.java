package com.example.onlineApplication.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.onlineApplication.model.JobseekerData;
import com.example.onlineApplication.model.UserData;

@Repository
public interface JobseekerRepo extends JpaRepository<JobseekerData, Integer> {
	UserData save(String user);
}


//@Repository
//public interface JobseekerRepo extends CrudRepository<JobseekerData, Integer> {
//
//
//	@Override
//	public default List<JobseekerData> findAll() {
//
//		return null;
//	}
//
//	public default Optional<JobseekerData> findById(int id) {
//
//		return null;
//	}
//
//	@Override
//	public default JobseekerData save(JobseekerData existingJobSeeker) {
//		return null;
//	}
//
//	public default JobseekerData deleteById(int id) {
//		return null;
//	}
//}
