import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import api from '../api/api'
import Header from './partials/Header'
import SubHeader from './partials/SubHeader'
import MiniHeader from './partials/MiniHeader'
import CourseList from './partials/CourseList'
import Cookies from 'universal-cookie';


class Dashboard extends Component {


  constructor(props) {

      super(props);

      this.state = {
          user: {
            id:"",
            email:"",
            firstName: "",
            lastName: ""
          },
          courses: [
            {id: 35, name: 'Binary Search Trees', spotsAvailable: 10, totalSpots: 15, 
                instructor: "Lucy Andersen", UTCDateTime: '2019-11-11T15:27:38Z',
                catagories: ['computer science']},
            {id: 36, name: 'Nodejs', spotsAvailable: 10, totalSpots: 15,
                instructor: "Jon Smith", UTCDateTime: '2019-12-11T15:27:38Z',
                catagories: ['react', 'javascript', 'node.js']
            }
          ]
        
      };     

      api.me((err,res) => {
        if (!err){
            const user = res.data;
            this.setState({user})
        }else{
            this.props.history.push({
                pathname: '/authenticate', 
                state: {error: "access denied"}
            })
        }
      })

      


  }

  logout(){
    api.logout((err,res) => {
      if (!err){
        this.props.history.push({
          pathname: '/authenticate', 
          state: {message: "logged out"}
        }) //TODO - need to handle passed back state in authenticate component.
      }else{
          console.log(err)
      }
  })
  }

  componentDidMount() {
    const cookies = new Cookies();
   
      if ((!cookies.get('connect.sid')) && (!this.state.user.id)){

        api.me((err,res) => {
          if (!err){
              const user = res.data;
              this.setState({user})
          }else{
              this.props.history.push({
                  pathname: '/authenticate', 
                  state: {error: "access denied"}
              }) //TODO - need to handle passed back state in authenticate component.
          }
        })
      }
 }

 render(){


    return (
        <div className="container-fluid p-0">
            <Header user={this.state.user} logout={() => this.logout()}/>
            <SubHeader />
            <MiniHeader />

            <CourseList courses={this.state.courses} />

            
        </div>
      
    );
  }

};

export default withRouter(Dashboard);
