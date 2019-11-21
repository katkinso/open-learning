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
            error: ""
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

        <div className="container pt-5">
            <div className="card align-middle">
                <div className="card-body">
                    <h1>Log in</h1>

                    <p>{this.state.error}</p>

                    <form onSubmit={e => this.handleSubmit(e)}>

                        <div className="form-group">
                        <label>Email</label>
                        <TextInput 
                            id="email"
                            type="email" 
                            placeholder="Enter Email" 
                            value={this.state.email} 
                            onChange={(e) => this.handleInputChange(e) }
                        />
                        </div>

                        <div className="form-group">
                        <label>Password</label>
                            <TextInput 
                            id="password"
                            type="password" 
                            placeholder="password" 
                            value={this.state.password} 
                            onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>

                        <Button type="submit" text="Login" />   

                    </form>

                </div>
            </div>
        </div>
      
    );
  }
};

export default withRouter(Register);
