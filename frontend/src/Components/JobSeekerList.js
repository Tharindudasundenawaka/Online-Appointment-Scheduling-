import React, { useEffect, useState } from "react";
import axios from "axios";

const JobSeekerList = () => {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    
    axios
      .get("http://job-seekers")
      .then((response) => {
       
        setJobSeekers(response.data);
      })
      .catch((error) => {
        
        console.error("Error fetching job seekers:", error);
      });
  }, []); 

  return (
    <div>
      <h2>Job Seekers</h2>
      <ul>
        {jobSeekers.map((jobSeeker) => (
          <li key={jobSeeker.id}>{jobSeeker.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobSeekerList;
