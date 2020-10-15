import React from 'react';
import axios from 'axios';

class StudentsInBlock extends React.Component {
  state = {
    students: [],
    isLoading: true,
    totalNumberStudent:0
  };

  componentDidMount() {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students?block=${this.props.block_name}`
      )
      .then((response) => {
        this.setState({ students: response.data.students, isLoading: false,totalNumberStudent: response.data.students.length });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      axios
        .get(
          `https://nc-student-tracker.herokuapp.com/api/students?block=${this.props.block_name}`
        )
        .then((response) => {
          this.setState({ students: response.data.students, isLoading: false ,totalNumberStudent: response.data.students.length});
        });
    }
  }

  render() {
    return this.state.isLoading ? (
      <p>Page is currently loading...</p>
    ) : (
        <div>
        <h4>Total Student: {this.state.totalNumberStudent}</h4>
      <ul>
        {this.state.students.map(({ _id, startingCohort, name }) => {
          return (
            <li key={_id}>
              {name}
              <br />
              Starting Cohort: {startingCohort}
            </li>
          );
        })}
      </ul>
      </div>
    );
          
  }
}
export default StudentsInBlock;
