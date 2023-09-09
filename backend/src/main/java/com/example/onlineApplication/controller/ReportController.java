package com.example.onlineApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.onlineApplication.service.ReportService;

import jakarta.annotation.Resource;

@RestController
@RequestMapping("/reports")
public class ReportController {
	@Autowired
	private ReportService reportService;

	@GetMapping("/generate")
	public String generateReport() {

		return reportService.generateReport();
	}

	@GetMapping("/download/{reportId}")
	public ResponseEntity<Resource> downloadReport(@PathVariable String reportId) {

		Resource reportFile = (Resource) reportService.getReportFile(reportId);

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_PDF);
		headers.setContentDispositionFormData("attachment", "report.pdf");

		return ResponseEntity.ok().headers(headers).body(reportFile);
	}

}

