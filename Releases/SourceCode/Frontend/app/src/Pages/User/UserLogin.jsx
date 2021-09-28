import React, { Component } from "react";
import "./UserLogin.css";
import { imagePath } from "../../Services";
import axios from "axios";
import { userLoginURL } from "../../Services/endpoints";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    axios.post(userLoginURL, data).then((res) => {
      console.log(res);
      if (res.data === "UNAUTHORIZED") {
        window.location = "/userLogin";
      } else {
        Swal.fire({
          icon: "success",
          title: "Login Successful!!",
        }).then(() => {
          localStorage.setItem("name", res.data.name);
          window.location = "/dashboard";
        });
      }
    });
  };

  render() {
    return (
      <div className="UserLogin">
        <div className="d-flex justify-content-center">
          <img src={imagePath + `logo.png`} alt="" className="logo-login" />
        </div>
        <div className="User-Login-Heading-Container">
          <h3 className="Login-User-Heading">Admin Login</h3>
        </div>
        <div className="User-Login-Body-Container">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4 row">
              <label className="col-sm-10 col-form-label">Email :</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Email"
                  required
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-10 col-form-label">Password :</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="LoginRow">
              <button type="submit" className="User-Button-Login">
                Login
              </button>
              <Link className="RegLink" to="/addUser">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
