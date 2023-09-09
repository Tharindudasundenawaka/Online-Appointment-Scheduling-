import React, { useEffect, useState } from "react";
import axios from "axios";

const ConsultantList = () => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
   
    axios
      .get("http://consultants")
      .then((response) => {
        
        setConsultants(response.data);
      })
      .catch((error) => {
        
        console.error("Error fetching consultants:", error);
      });
  }, []); 

  return (
    <div>
      <h2>Available Consultants</h2>
      <ul>
        {consultants.map((consultant) => (
          <li key={consultant.id}>{consultant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultantList;
