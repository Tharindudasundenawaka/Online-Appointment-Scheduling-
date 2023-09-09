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

import com.example.onlineApplication.model.JobseekerData;
import com.example.onlineApplication.service.JobSeekerService;

@RestController
@RequestMapping("/jobseekers")
public class JobSeekerController {
	@Autowired
	private JobSeekerService jobSeekerService;

	@GetMapping
	public List<JobseekerData> getAllJobSeekers() {
		return jobSeekerService.getAllJobSeekers();
	}

	@GetMapping("/{id}")
	public JobseekerData getJobSeekerById(@PathVariable int id) {
		return jobSeekerService.getJobSeekerById(id);
	}

	@PostMapping
	public JobseekerData createJobSeeker(@RequestBody JobseekerData jobSeeker) {
		return jobSeekerService.createJobSeeker(jobSeeker);
	}

	@PutMapping("/{id}")
	public JobseekerData updateJobSeeker(@PathVariable int id, @RequestBody JobseekerData jobSeeker) {
		return jobSeekerService.updateJobSeeker(id, jobSeeker);
	}

	@DeleteMapping("/{id}")
	public void deleteJobSeeker(@PathVariable int id) {
		jobSeekerService.deleteJobSeeker(id);
	}

}
