import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import api from '../api/api'
import Header from './partials/Header'
import SubHeader from './partials/SubHeader'
import MiniHeader from './partials/MiniHeader'
import Button from './ui/Button'



class Dashboard extends Component {

  constructor(props) {
      super(props);

      this.state = {
          user: {
            id:"",
            email:"",
            firstName: "",
            lastName: ""
          }
      };       
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

 render(){
    return (

        <div className="container-fluid p-0">
            <Header user={this.state.user} logout={() => this.logout()}/>
            <SubHeader />
            <MiniHeader />
            I am the dashboard.
        </div>
      
    );
  }

};

export default withRouter(Dashboard);
