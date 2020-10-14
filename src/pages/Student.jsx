import React from 'react';
import axios from 'axios';

class Student extends React.Component {
  state = {
    student:{},
    isLoading:true,

  }
  componentDidMount() {
    axios.get(`https://nc-student-tracker.herokuapp.com/api/students/${this.props.student_id}`)    
      .then((response) => {
        const { name, blockHistory, startingCohort } = response.data.student;
        
    console.log(response.data.student)
        this.setState({student:{name,blockHistory,startingCohort},isLoading:false})
      })
  }
  render() {
    return this.state.isLoading ? (
      <p>Page is currently loading...</p>
    ) :(
      <div>
        <p>Student Name: {this.state.student.name}</p>
        <p>Student Starting Cohort: {this.state.student.startingCohort}</p>
       <ul>
          {
            this.state.student.blockHistory.map((bHistory,index) => {
              return <li key={index}>{bHistory.name}</li>
            })
          }
        </ul>
      </div>
      );
  }
}

export default Student;
