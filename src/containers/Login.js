import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../static/App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginError: false
    };
  }

  formErrors() {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({
        loginError: true
      })
    }else{
      this.setState({
        loginError: false
      })
    }
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.formErrors()) {
      alert("Logging In!")
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input 
                id="email"
                class="input" 
                type="email" 
                placeholder="Email" 
                value={this.state.email}
                onChange={this.handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

           <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input 
                id="password"
                class="input" 
                type="password" 
                placeholder="Password" 
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
            {this.state.loginError && <p class="help is-danger">Invalid Username or Password</p>}
          </div>


          <div class="field">
            <p class="control">
              <button class="button is-dark" type="submit">
                Login
              </button>
            </p>
          </div>
        </form>
        <h5> Need an account? <Link to="/register"> Register Here!</Link> </h5>
      </div>
    );
  }
}