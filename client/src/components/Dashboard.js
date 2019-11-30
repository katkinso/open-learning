import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
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
            lastName: "",
            sessions: [],
            nextSession: ""
          },
          sessions: [],
          notification: "Remember, Thursday is a holiday! Don’t forget to submit your answers to the latest survey"
      };     

      if (!utils.checkCookie()) {
          props.history.push({
          pathname: '/authenticate',
          state: { error: "access denied" }
        })
      }

      api.me((err,res) => {
        if (!err){
            const user = res.data;
            const userSessions = []

            user.sessions.map((session) => {
              userSessions.push(session.id);
            })

            user.nextSession = user.sessions[0]; //latest date
            user.sessions = userSessions;

            this.setState({user})
        }
      })

      api.sessions('info', (err,res) => {
        if (!err){
            const sessions = res.data;
            this.setState({sessions})
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
      }
    })
  }


 render(){

    const { user, sessions, notification } = this.state;

    return (
        <div className="container-fluid px-0 pb-5">
            <Header user={user} logout={() => this.logout()}/>
            <SubHeader nextSession={user.nextSession} />
            <MiniHeader notification={notification} />
            <SessionList sessions={sessions} userSessions={user.sessions}  />
        </div>
      
    );
  }
};

export default withRouter(Dashboard);
