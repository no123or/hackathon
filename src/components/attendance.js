import React from 'react'
function Attendance() {
  return (
    <div style={{marginLeft: "500px", marginTop: "20px"}}>
      <h2 style={{marginLeft:'20px'}}> Attemdance Form </h2>
        <form style={{backgroundColor: "#18191a" , color: "white"}}>
          <label style={{color: "white"}}> 
            Name:
            <input
              type="text"
              name="name"
              placeholder='Your Name Here'
            />
          </label>
          <br />
          <label style={{color: "white"}}>
            Course:
            <select name="course" >
              <option value="1">1- Web & App Development</option>
              <option value="2">2- Graphic Designing</option>
              <option value="3">3- Content Writing</option>
            </select>
          </label>
          <br />
          <label style={{color: "white"}}>
            Attendance:
            <label style={{color: 'white'}}>
              <input
                type="radio"
                name="attendance"
                value="1"
              />
              Present
            </label>
            <label style={{color: "white"}}>
              <input
                type="radio"
                name="attendance"
                value="2"
              />
              Absent
            </label>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
  )
}

export default Attendance

 