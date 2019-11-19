import React, { Component } from "react";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            signinError: {}
        };       
     }

     handleInputChange(e) {
        const value = e.target.value;
        const key = e.target.id;
        this.setState({ [key]:value });
     }
    

  render(){

    return (

        <div className="container pt-5">
            <div className="card align-middle">
                <div className="card-body">
                    <h1>Register</h1>

                    <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                        id="email"
                        type="email" 
                        className="form-control"
                        placeholder="Enter email" 
                        value={this.state.email}
                        onChange= {e => this.handleInputChange(e)}
                        />

                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        id="password"
                        type="password" 
                        className="form-control"
                        placeholder="Enter password" 
                        value={this.state.password}
                        onChange= {e => this.handleInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      
    );
  }
};

export default Register;
