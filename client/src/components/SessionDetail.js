import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import api from '../api/api'
import utils from '../utils/utils'



class SessionDetail extends Component {


  constructor(props) {

      super(props);

      this.state = {
        session: ""
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


      const id = this.props.match.params.id;

      api.session(id, (err,res) => {
        if (!err){
            const session = res.data;
            this.setState({session})
        }
      })

  }



 render(){

    const { session } = this.state;

    return (
        <div className="container-fluid p-0">
         {session.error}
         {session.name} {session.description}
        </div>
      
    );
  }

};

export default withRouter(SessionDetail);
