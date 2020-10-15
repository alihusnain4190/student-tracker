import React from 'react';
import axios from 'axios';
import StudentList from '../components/StudentList';

class StudentsInBlock extends React.Component {
  state = {
    students: [],
    isLoading: true,
    totalNumberStudent: 0,
  };

  componentDidMount() {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students?block=${this.props.block_name}`
      )
      .then((response) => {
        this.setState({
          students: response.data.students,
          isLoading: false,
          totalNumberStudent: response.data.students.length,
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      axios
        .get(
          `https://nc-student-tracker.herokuapp.com/api/students?block=${this.props.block_name}`
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

  render() {
    return this.state.isLoading ? (
      <p>Page is currently loading...</p>
    ) : (
      <StudentList
        listArray={this.state.students}
        studentTotal={this.state.totalNumberStudent}
      />
    );
  }
}
export default StudentsInBlock;
