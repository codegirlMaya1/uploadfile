import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCheckboxChange = () => {
    setIsConfirmed(!isConfirmed);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile || !isConfirmed) {
      alert('Please select a file and confirm it is correct.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('hairshegoesss@gmail.com', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('This is just a application demonstrating email submission/ Form will not be sent.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="upload-form">
        <input type="file" onChange={handleFileChange} />
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        <label>
          <input type="checkbox" checked={isConfirmed} onChange={handleCheckboxChange} />
          Confirm the uploaded file is correct
        </label>
        <button type="submit">Submit</button>
        <a href="mailto:youremail@example.com
         ?subject=Saying%20hello%20from%20User">
          Alternatively Send A Mock Email With Subject
    </a>
        
           
        
    
       
      </form>
    </div>
  );
};

export default FileUpload;