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
      <ul>
        {props.listArray.map((student) => {
          return (
            <li key={student._id} className="student-card">
              <Link to={`/students/${student._id}`}>{student.name}</Link>
              <br />
              Student ID: {student._id}
              <br />
              Starting cohort: {student.startingCohort}
            </li>
          );
        })}
      </ul>
      <Router>
      {/* <StudentsInBlock path="/:block_name/students" /> */}
      <Student path="/:student_id" />
      </Router>
    </div>
  );
};

export default StudentList;
