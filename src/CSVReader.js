import React, { useState } from "react";
import axios from "axios";

const CSVReader = () => {
  const [csvData, setCSVData] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const formData = new FormData();
        console.log(formData);
        formData.append("file", file);

        // Send file to backend for processing
        await axios.post("/api/upload", formData);

        // Wait for the file processing to complete before fetching the data
        await fetchData();
        console.log("fetchData:", fetchData)
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const fetchData = async () => {
    try {
      // Fetch data from MySQL (adjust the endpoint and logic accordingly)
      const response = await axios.get("/getDataFromMySQL");
      setCSVData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <h2>CSV Data:</h2>
      <pre>{JSON.stringify(csvData, null, 2)}</pre>
    </div>
  );
};

export default CSVReader;
