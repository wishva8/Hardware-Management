import React, { Component } from "react";
import "./AddUser.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    };
  }
  // state = {
  //     nicNo: "",
  //     name: "",
  //     address: "",
  //     userType: "",
  //     email: "",
  //     phoneNo: ""
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    alert(this.state.value);
  };

  render() {
    return (
      <div className="AddUser">
        <div className="User-Create-Heading-Container">
          <h3 className="Register-User-Heading">Add User</h3>
        </div>
        <div className="User-Create-Body-Container">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">NIC No :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="text"
                  id="nicNo"
                  name="nicNo"
                  placeholder="951234567V"
                  required
                  value={this.state.nicNo}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Name :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Address :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="110/C, Town Hall, Colombo"
                  required
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">User Type :</label>
              <div class="col-sm-9">
                <select
                  class="form-control"
                  value="userType"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="Manager">Manager</option>
                  <option value="Cashier">Cashier</option>
                  <option value="Accountant">Accountant </option>
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Email :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="abc@abc.com"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Phone No :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="Number"
                  id="phoneNo"
                  name="phoneNo"
                  placeholder="0766157878"
                  required
                  value={this.state.phoneNo}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="DriverRow">
              <button type="submit" className="User-Button-Reset">
              <FontAwesomeIcon icon={faRedo} /> Reset
              </button>
              <button type="submit" className="User-Button-Add">
              <FontAwesomeIcon icon={faPlus} /> Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
