
import React, { useState } from 'react';
import '../style/course.css';
function Course() {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the submitted data here
    console.log('Submitted Data:', { courseId, courseName, courseCode, courseDescription });
  };
  return (
    <div className="attractive-form-container">
    <h2>Course Information</h2>
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="courseName" style={{color: 'white'}}>Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Enter Course Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseCode" style={{color: 'white'}}>Course Code:</label>
        <input
          type="text"
          id="courseCode"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          placeholder="Enter Course Code"
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseDescription" style={{color: 'white'}}>Course Description:</label>
        <textarea
          id="courseDescription"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          placeholder="Enter Course Description"
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  )
};

export default Course;