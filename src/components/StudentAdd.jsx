import React, { Component } from 'react'
import axios from 'axios';
class StudentAdd extends Component{
    state = {
        startingCohort:'',
        name: '',
            
    }
    handleChange = (e) => {
        e.preventDefault();
        const  {value,name}= e.target;
        this.setState({[name]:value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { startingCohort, name, } = this.state;
 
        axios.post('https://nc-student-tracker.herokuapp.com/api/students',
            { startingCohort, name })
            .then(resp => {
            console.log(resp)
        })
    }
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
          
                <label htmlFor="startingCohort">
                   Current Block  <input value={this.state.startingCohort} onChange={this.handleChange}type="text" name="startingCohort">
                    </input>
                              </label>
            
                <label htmlFor="name">
                   Student Name <input value={this.state.name}  onChange={this.handleChange} type="text" name="name">
                    </input>
                </label>
                <button >Submit</button>
            </form>
        );
    }
}
export default StudentAdd;