import React, { Component } from "react";
import "./AddUser.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { addUserURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nicNo: "",
      name: "",
      address: "",
      userType: "",
      email: "",
      phoneNo: "",
      password: "",
      rePassword: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nicNo: this.state.nicNo,
      name: this.state.name,
      address: this.state.address,
      userType: this.state.userType,
      email: this.state.email,
      phoneNo: this.state.phoneNo,
      password: this.state.password,
      rePassword: this.state.rePassword,
    };
    console.log(data);
    const res = axios.post(addUserURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!",
      }).then(() => {
        window.location = "/";
      });
    });
  };

  reset() {
    const res = {
      nicNo: "",
      name: "",
      address: "",
      userType: "",
      email: "",
      phoneNo: "",
      password: "",
      rePassword: "",
    };
  }

  render() {
    return (
      <div className="AddUser">
        <SideNav />
        <div className="content-layer">
          <Header topic="User Management" />
          <div className="User-Create-Heading-Container">
            <h3 className="Register-User-Heading">Add User</h3>
          </div>
          <div className="User-Create-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">NIC No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="nicNo"
                    name="nicNo"
                    placeholder="951234567V"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Name :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Address :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="110/C, Town Hall, Colombo"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">User Type :</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name="userType"
                    value={this.state.userType}
                    onChange={this.handleChange}
                  >
                    <option hidden>-Select-</option>
                    <option value="1">Manager</option>
                    <option value="2">Cashier</option>
                    <option value="3">Accountant </option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Email :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="abc@abc.com"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Phone No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="tel"
                    pattern="[0-9]{10}"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="0766157878"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Password :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="Password"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Confirm Password :
                </label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="password"
                    id="rePassword"
                    name="rePassword"
                    placeholder="Confirm Password"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DriverRow text-end">
                <button
                  type="reset"
                  className="User-Button-Reset"
                  onClick={this.reset}
                >
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </button>
                <button type="submit" className="User-Button-Add">
                  <FontAwesomeIcon icon={faPlus} />
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
