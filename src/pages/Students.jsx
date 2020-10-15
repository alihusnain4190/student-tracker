//<li>Student: Go to '/students/(enter student id here)'</li>
//Create link on each student in list to navigate to that specific student
import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

class Students extends React.Component {
  state = {
    students: [],
    isLoading: true,
    totalNumberStudent:0
  };

  componentDidMount() {
    axios
      .get('https://nc-student-tracker.herokuapp.com/api/students')
      .then((res) => {
        this.setState({ students: res.data.students, isLoading: false,totalNumberStudent: res.data.students.length });
      });
  }

  handleChange = (event) => {
    const { value } = event.target;
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students?sort_by=${value}`
      )
      .then((response) => {
        this.setState({ students: response.data.students, isLoading: false,totalNumberStudent: response.data.students.length  });
      });
  };

  render() {
    return this.state.isLoading ? (
      <p>Page is currently loading...</p>
    ) : (
      <div className="student-container">
        <div className="sort-container">
          <label htmlFor="sortSelector">
            Sort by:
            <select onChange={this.handleChange} id="sortSelector" required>
              <option value="">--Please select an option--</option>
              <option value="name">name</option>
              <option value="startingCohort">starting cohort</option>
            </select>
          </label>
        </div>
          <h3>Students:</h3>
          <h4>Total Student:  {this.state.totalNumberStudent}</h4>
        <ul>
          {this.state.students.map((student) => {
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
  }
}

export default Students;
