import React, { useEffect, useState } from "react";
import axios from "axios";

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    
    axios
      .get("http://reports")
      .then((response) => {
       
        setReports(response.data);
      })
      .catch((error) => {
        
        console.error("Error fetching reports:", error);
      });
  }, []); 

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.reportId}>
            <strong>Report Type:</strong> {report.reportType}<br />
            <strong>Content:</strong> {report.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
