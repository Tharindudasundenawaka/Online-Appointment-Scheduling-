package com.example.onlineApplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.onlineApplication.Repo.JobseekerRepo;
import com.example.onlineApplication.model.JobseekerData;

@Service
public class JobSeekerService {
	@Autowired
	private JobseekerRepo jobSeekerRepo;

	public List<JobseekerData> getAllJobSeekers() {
		return jobSeekerRepo.findAll();
	}

	public JobseekerData getJobSeekerById(int id) {
		Optional<JobseekerData> jobSeeker = jobSeekerRepo.findById(id);
		return jobSeeker.orElse(null);
	}

	public JobseekerData createJobSeeker(JobseekerData jobSeeker) {

		return jobSeekerRepo.save(jobSeeker);
	}

	public JobseekerData updateJobSeeker(int id, JobseekerData updatedJobSeeker) {
		Optional<JobseekerData> existingJobSeekerOptional = jobSeekerRepo.findById(id);

		if (existingJobSeekerOptional.isPresent()) {
			JobseekerData existingJobSeeker = existingJobSeekerOptional.get();

			existingJobSeeker.setPhoneNumber(updatedJobSeeker.getPhoneNumber());
			existingJobSeeker.setUsername(updatedJobSeeker.getUsername());
			existingJobSeeker.setUserType(updatedJobSeeker.getUserType());
			existingJobSeeker.setPassword(updatedJobSeeker.getPassword());
			existingJobSeeker.setPhoneNumber(updatedJobSeeker.getPhoneNumber());


			return jobSeekerRepo.save(existingJobSeeker);
		} else {

			return null;
		}
	}

	public void deleteJobSeeker(int id) {
		jobSeekerRepo.deleteById(id);
	}
}
