import React from 'react';
import axios from 'axios';
import StudentList from '../components/StudentList';
import { Router } from '@reach/router';
import Student from './Student'
class StudentDisplayer extends React.Component {
  state = {
    students: [],
    isLoading: true,
    totalNumberStudent: 0,
    sortValue: '',
  };

  componentDidMount() {
    if (this.props.query) {
      axios
        .get(
          `https://nc-student-tracker.herokuapp.com/api/students?${this.props.query}=${this.props.value}`
        )
        .then((res) => {
          this.setState({
            students: res.data.students,
            isLoading: false,
            totalNumberStudent: res.data.students.length,
          });
        });
    } else {
      axios
        .get('https://nc-student-tracker.herokuapp.com/api/students')
        .then((res) => {
          this.setState({
            students: res.data.students,
            isLoading: false,
            totalNumberStudent: res.data.students.length,
          });
        });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortValue !== this.state.sortValue) {
      if (this.props.query) {
        axios
          .get(
            `https://nc-student-tracker.herokuapp.com/api/students?${this.props.query}=${this.props.value}&sort_by=${this.state.sortValue}`
          )
          .then((response) => {
            this.setState({
              students: response.data.students,
              isLoading: false,
              totalNumberStudent: response.data.students.length,
            });
          });
      } else {
        axios
          .get(
            `https://nc-student-tracker.herokuapp.com/api/students?sort_by=${this.state.sortValue}`
          )
          .then((response) => {
            this.setState({
              students: response.data.students,
              isLoading: false,
              totalNumberStudent: response.data.students.length,
            });
          });
      }
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState((prevState) => {
      return {
        students: prevState.students,
        isLoading: prevState.isLoading,
        totalNumberStudent: prevState.totalNumberStudent,
        sortValue: value,
      };
    });
  };

  render() {
    console.log(this.props)
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
        <StudentList
          listArray={this.state.students}
          studentTotal={this.state.totalNumberStudent}
          />
          <Router>

        <Student path="/:student_id" />
          </Router>
      </div>
    );
  }
}

export default StudentDisplayer;
