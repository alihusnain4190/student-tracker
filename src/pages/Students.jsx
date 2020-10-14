//<li>Student: Go to '/students/(enter student id here)'</li>
//Create link on each student in list to navigate to that specific student
import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

class Students extends React.Component {
  state = {
    students: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get('https://nc-student-tracker.herokuapp.com/api/students')
      .then((res) => {
        this.setState({ students: res.data.students, isLoading: false });
      });
  }

  render() {
    return this.state.isLoading ? (
      <p>Page is currently loading...</p>
    ) : (
      <ul>
        {this.state.students.map((student) => {
          return (
            <li key={student._id}>
              <Link to={`/students/${student._id}`}>{student.name}</Link>
              <br />
              {student._id}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Students;
