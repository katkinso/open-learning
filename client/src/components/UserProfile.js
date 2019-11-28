import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import utils from '../utils/utils'
import api from '../api/api'




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

    return (
        <div className="container-fluid p-0">
            User Profile Page
        </div>
      
    );
  }

};

export default withRouter(UserProfile);
