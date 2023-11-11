// CSVReader.js
import React, { useState } from "react";

const CSVReader = () => {
  const [csvData, setCSVData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      console.log(reader)

      reader.onload = (e) => {
        const content = e.target.result;
        // Process the CSV content (parse it, extract data, etc.)
        const parsedData = parseCSV(content);
        setCSVData(parsedData);
      };

      reader.readAsText(file);
    }
  };

  const parseCSV = (csvContent) => {
    // Implement your CSV parsing logic here
    // For a simple example, split by lines and then by commas
    const rows = csvContent.split("\n");
    const data = rows.map((row) => row.split(","));
    return data;
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
