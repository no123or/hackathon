import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


function Student() {
    const [studentName, setStudentName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', { studentName, contact });
  };
  return (
<>
<div className="form-container-student">
      <h2>Student Information</h2>
      <form onSubmit={handleSubmit} className='form-student'>
        <label htmlFor="studentName" className='label-student' style={{color: 'white'}}>Student Name:</label>
        <input className='student-input'
          type="text"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter student name"
        />

        <label htmlFor="contact" className='label-student' style={{color: 'white'}}>Contact:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter contact"
        /> <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
</>
  )
}

export default Student