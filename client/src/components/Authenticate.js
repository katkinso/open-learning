import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import api from '../api/api'
import Button from './ui/Button'
import TextInput from './ui/TextInput'

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            message: ""
        };       
     }

     handleInputChange(e) {
        const value = e.target.value;
        const key = e.target.id;
        this.setState({ [key]:value });
     }

     handleSubmit(e) {
        e.preventDefault();

        api.authenticate({
            "email": this.state.email,
            "password": this.state.password,
        },(err,res) => {
            if (!err){
                this.props.history.push('/dashboard')
            }else{
                this.setState({
                    error:"that's not right"
                })
            }
        })

     }
    

  render(){

    return (

        <div className="container login">

            <div className="row">
                <div className="col-sm"></div>
                <div className="col-sm-4">

                    { /* CARD START */}
                    <div className="card align-middle shadow-sm bg-white rounded my-5">
                    <div className="card-body p-5">
                    
                    <div className="mx-auto pb-3 logo">
                        <img src="/assets/images/logo.png" width="50px" alt="logo" />
                    </div>
                    
                    <p>{this.state.error}</p>

                    <form onSubmit={e => this.handleSubmit(e)}>

                        <div className="form-group">
                        <TextInput 
                            id="email"
                            type="email" 
                            placeholder="email" 
                            value={this.state.email} 
                            onChange={(e) => this.handleInputChange(e) }
                        />
                        </div>

                        <div className="form-group pb-3">
                            <TextInput 
                            id="password"
                            type="password" 
                            placeholder="password" 
                            value={this.state.password} 
                            onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <Button type="submit" text="LOG IN" for="login" />   

                    </form>
    
                    </div>
                </div>
                { /* CARD END */}

            </div>
            <div className="col-sm"></div>
        </div>
    </div>
    /* CONTAINER END */
      
    );
  }
};

export default withRouter(Register);
