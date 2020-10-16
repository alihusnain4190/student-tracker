import React from 'react';
import { Link ,Router} from '@reach/router';
import ToggleView from './ToggleView'
import Student from '../pages/Student'
import StudentAdd from './StudentAdd'
const StudentList = (props) => {

  return (
    <div>
    <StudentAdd></StudentAdd>
      <h4>Total Student: {props.studentTotal}</h4>
      <table>
          <thead>
            <tr>
            <th>
              Student ID</th>
            
              <th>
              Student Name</th>
            
              <th>
              Starting cohort</th>
            </tr>
          </thead>
        
          <tbody>
        {props.listArray.map((student) => {
          return (
            <tr className="border"  key={student._id} >
              <td>{student._id}</td>
              <td><Link to={`/students/${student._id}`}>{student.name}</Link></td>
              <td>{student.startingCohort}</td>
            </tr>
            // <li key={student._id} className="student-card">
            //   <Link to={`/students/${student._id}`}>{student.name}</Link>
            //   <br />
            //   Student ID: {student._id}
            //   <br />
            //   Starting cohort: {student.startingCohort}
            // </li>
          );
        })}
          </tbody>
 
      </table>
      <Router>
      {/* <StudentsInBlock path="/:block_name/students" /> */}
      <Student path="/:student_id" />
      </Router>
    </div>
  );
};

export default StudentList;
