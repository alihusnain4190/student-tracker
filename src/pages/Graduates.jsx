import React from 'react';
import axios from 'axios';

class Graduates extends React.Component{
  state = {
    graduates: [],
    isLoading:true
  }
  componentDidMount() {
    axios.get('https://nc-student-tracker.herokuapp.com/api/students?graduated=true')
      .then((response) => {
        const graduateStudents = response.data.students;
        this.setState({graduates:graduateStudents,isLoading:false})  
      })
  }
  render() {
    return this.state.isLoading ? (
      <p>Page is currently loading...</p>
    ) :(
        <div>
          <ul>
            {this.state.graduates.map(({ _id, name, startingCohort }) => {
            return  <li key={_id}> {name}   <br/>Starting Cohort: {startingCohort} </li>
            })}
          </ul>
        </div>
    )
  }
}


export default Graduates;
