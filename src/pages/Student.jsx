import React from 'react';
import axios from 'axios';
const { formatBlockArr } = require('../utils/utils');

class Student extends React.Component {
  state = {
    student: {},
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students/${this.props.student_id}`
      )
      .then((response) => {
        const { name, blockHistory, startingCohort } = response.data.student;

        this.setState({
          student: {
            name,
            blockHistory,
            startingCohort,
          },
          isLoading: false,
          blockCount: formatBlockArr(response.data.student.blockHistory),
        });
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      axios
        .get(
          `https://nc-student-tracker.herokuapp.com/api/students/${this.props.student_id}`
        )
        .then((response) => {
          const { name, blockHistory, startingCohort } = response.data.student;

          this.setState({
            student: {
              name,
              blockHistory,
              startingCohort,
            },
            isLoading: false,
            blockCount: formatBlockArr(response.data.student.blockHistory),
          });
        });
    }
}
  render() {
    console.log(this.props);
    return this.state.isLoading ? (
      <p>Page is currently loading...</p>
    ) : (
      <div>
        <p>Student Name: {this.state.student.name}</p>
        <p>Starting Cohort: {this.state.student.startingCohort}</p>
        <ul>
          {this.state.blockCount.map((bHistory, index) => {
            return <li key={index}>{bHistory}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Student;
