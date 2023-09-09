package com.example.onlineApplication.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class AppointmentData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	private ConsultantData consultant;

	@ManyToOne
	private JobseekerData jobSeeker;

	@Temporal(TemporalType.TIMESTAMP)
	private Date appointmentDateTime;

	private String location;

	public AppointmentData(int id, ConsultantData consultant, JobseekerData jobSeeker, Date appointmentDateTime,
			String location) {
		super();
		this.id = id;
		this.consultant = consultant;
		this.jobSeeker = jobSeeker;
		this.appointmentDateTime = appointmentDateTime;
		this.location = location;
	}

	public AppointmentData() {
		super();
	}

	public int getId() {
		return id;
	}

	public ConsultantData getConsultant() {
		return consultant;
	}

	public void setConsultant(ConsultantData consultant) {
		this.consultant = consultant;
	}

	public JobseekerData getJobSeeker() {
		return jobSeeker;
	}

	public void setJobSeeker(JobseekerData jobSeeker) {
		this.jobSeeker = jobSeeker;
	}

	public Date getAppointmentDateTime() {
		return appointmentDateTime;
	}

	public void setAppointmentDateTime(Date appointmentDateTime) {
		this.appointmentDateTime = appointmentDateTime;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}
