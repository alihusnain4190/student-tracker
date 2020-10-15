import React from 'react';
import { Link } from '@reach/router';

const StudentList = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default StudentList;
