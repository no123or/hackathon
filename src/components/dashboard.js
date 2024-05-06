import React from 'react'
import '../style/dashboard.css';
import { Link } from 'react-router-dom';
import StudentTable from './studentTable';
function Dashboard() {
  return (
    <div>
    <div class='dashborad'>
<nav class='sidebar'>
<div class='logo'> Dashboard Logo</div>
<ul>
    <li><CustomLink Link to='/studentTable'>Student Table </CustomLink></li>
    <li><a href='#'>Analytics</a></li>
    <li><a href='#'>Reports</a></li>
    <li><a href='#'>Settings</a></li>
</ul>
</nav>
<div class='main-content'>
    <header>
        <h1>Dashboard</h1>
        <div class="user-info">Welcome, Noor ul Iman</div>
    </header>
    <div class="content">
 <p>This is the main content area of your dashboard.</p>
    </div>
</div>
        </div>
    </div>
  )
};

export default Dashboard;