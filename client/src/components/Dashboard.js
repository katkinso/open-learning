import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import api from '../api/api'
import utils from '../utils/utils'
import Header from './partials/Header'
import SubHeader from './partials/SubHeader'
import MiniHeader from './partials/MiniHeader'
import SessionList from './partials/SessionList'



class Dashboard extends Component {


  constructor(props) {

      super(props);

      this.state = {
          message: "",
          user: {
            id:"",
            email:"",
            firstName: "",
            lastName: ""
          },
          sessions: []
        
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

      api.sessions('info', (err,res) => {
        if (!err){
            const sessions = res.data;
            this.setState({sessions})
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
          state: { message: "logged out" }
        })
      }else{
          console.log(err)
      }
    })
  }


 render(){


    return (
        <div className="container-fluid p-0">
            <Header user={this.state.user} logout={() => this.logout()}/>
            <SubHeader />
            <MiniHeader />

            <SessionList sessions={this.state.sessions} />

            
        </div>
      
    );
  }

};

export default withRouter(Dashboard);
