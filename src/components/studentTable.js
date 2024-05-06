import React from 'react'
import Dashboard from './dashboard';
function StudentTable() {
  return (
   <>
   <div container-fluid>
    <div class='row'>
      <div class='col-md-4'>
<Dashboard/>
      </div>
      <div class='col-md-8'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> <button>Edit</button> <button>delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td> <button>Edit</button> <button>delete</button></td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td> <button>Edit</button> <button>delete</button></td>
    </tr>
  </tbody>
</table>
    </div> 
    </div>

   </div>
   </>
  )
}

export default StudentTable;