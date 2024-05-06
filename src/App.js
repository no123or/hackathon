import React from 'react'
import ColorSchemesExample from './navbar'; 
import Course from './components/course';
import Student from './components/student';
import Attendance from './components/attendance';
import Dashboard from './components/dashboard';
import StudentTable from './components/studentTable';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './style/index.css';
import '../src/style/course.css';
import './style/dashboard.css';
function App() {
  return (
    <>
    <BrowserRouter>
<ColorSchemesExample/>
<Routes>
<Route path="/navbar" element= {<ColorSchemesExample/>} />
<Route path="/course" element= {<Course/>} />
<Route path="/student" element= {<Student/>} />
<Route path="/Attendance" element= {<Attendance/>}/>
<Route path='/dashboard' element= {<Dashboard/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
