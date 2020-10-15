import React from 'react';
import axios from 'axios';

class StudentsInBlock extends React.Component {
  state = {
    students: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students?block=${this.props.block_name}`
      )
      .then((response) => {
        this.setState({ students: response.data.students, isLoading: false });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      axios
        .get(
          `https://nc-student-tracker.herokuapp.com/api/students?block=${this.props.block_name}`
        )
        .then((response) => {
          this.setState({ students: response.data.students, isLoading: false });
        });
    }
  }

  render() {
    return this.state.isLoading ? (
      <p>Page is currently loading...</p>
    ) : (
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
    );
  }
}
export default StudentsInBlock;
