import React, { Component } from "react";
import "./DriverUpdate.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";

export default class DriverUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      licenseNo: "",
      name: "",
      address: "",
      vehicleNo: "",
      vehicleType: "",
      phoneNo: "",
    };
  }
  //   state = {
  //     licenseNo: "",
  //     name: "",
  //     address: "",
  //     vehicleNo: "",
  //     vehicleType: "",
  //     phoneNo: ""
  // };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    alert(this.state.value);
  };

  render() {
    return (
      <div className="UpdateDriver">
        <SideNav/>
        <div className="content-layer">
          <Header topic="Driver Management" />
        <div className="Driver-Update-Heading-Container">
          <h3 className="Update-Driver-Heading">Update Driver</h3>
        </div>
        <div className="Driver-Update-Body-Container">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">License No :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="text"
                  id="licenseNo"
                  name="licenseNo"
                  placeholder="License No"
                  required
                  value={this.state.licenseNo}
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
                  placeholder="Driver Name"
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
                  placeholder="Driver Address"
                  required
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Vehicle No :</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="text"
                  id="vehicleNo"
                  name="vehicleNo"
                  placeholder="Vehicle No"
                  required
                  value={this.state.vehicleNo}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Vehicle Type :</label>
              <div class="col-sm-9">
                <select
                  class="form-control"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="Lorry">Lorry</option>
                  <option value="Tipper">Tipper</option>
                  <option value="Land Master">Land Master</option>
                  <option value="Flat Bed">Flat Bed</option>
                </select>
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
              <button type="submit" className="Driver-Button-Update">
              <FontAwesomeIcon icon={faCheckCircle} /> Update Driver
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
