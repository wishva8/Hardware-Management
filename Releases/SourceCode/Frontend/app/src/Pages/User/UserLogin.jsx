import React, { Component } from "react";
import "./UserLogin.css";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isChecked: true,
    };
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.value);
  };

  render() {
    return (
      <div className="UserLogin">
        <div className="User-Login-Heading-Container">
          <h3 className="Login-User-Heading">Admin Login</h3>
        </div>
        <div className="User-Login-Body-Container">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Username :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Password :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="password"
                  id="password"
                  name="passowrd"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <input
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
              />
            <label className="rememberMe">Remember Me</label>
  
            <div className="DriverRow">
              <button type="submit" className="User-Button-Login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
