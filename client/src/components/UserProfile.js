import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import utils from '../utils/utils'
import api from '../api/api'
import Header from './partials/Header'
import MiniHeader from './partials/MiniHeader'

class UserProfile extends Component {


  constructor(props) {

      super(props);

      this.state = {
        user: {
          id:"",
          email:"",
          firstName: "",
          lastName: ""
        }
      }

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


 render(){

    const { user } = this.state;

    console.log({user})

    return (
      <div className="container-fluid px-0 pb-5">
        <Header user={user} logout={() => this.logout()}/>
        <MiniHeader />
        <div className="container mt-5">

        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        </div>

        </div>
      
    );
  }

};

export default withRouter(UserProfile);
