package com.example.onlineApplication.service;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

@Service
public class ReportService {

	public String generateReport() {

		String reportFilePath = generatePDFReport();
		return reportFilePath;
	}

	public Resource getReportFile(String reportId) {

		Resource reportFile = loadPDFReport(reportId);
		return reportFile;
	}


	private String generatePDFReport() {

		return "/path/to/generated/report.pdf";
	}

	private Resource loadPDFReport(String reportId) {

		return new FileSystemResource("/path/to/generated/report.pdf");
	}
}
