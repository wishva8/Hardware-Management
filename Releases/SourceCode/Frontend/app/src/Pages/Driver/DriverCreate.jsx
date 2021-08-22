import React, { Component } from "react";
import "./DriverCreate.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";

export default class DriverCreate extends Component {
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      licenseNo: this.state.licenseNo,
      name: this.state.name,
      address: this.state.address,
      vehicleNo: this.state.vehicleNo,
      vehicleType: this.state.vehicleType,
      phoneNo: this.state.phoneNo,
    };
    console.log(data);
  };

  reset() {
    const res = {
      licenseNo: "",
      name: "",
      address: "",
      vehicleNo: "",
      vehicleType: "",
      phoneNo: "",
    };
  }

  render() {
    return (
      <div className="CreateDriver">
        <SideNav />
        <div className="content-layer">
          <Header topic="Driver Management" />
          <div className="Driver-Create-Heading-Container">
            <h3 className="Add-Driver-Heading">Add Driver</h3>
          </div>
          <div className="Driver-Create-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">License No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="licenseNo"
                    name="licenseNo"
                    placeholder="License No"
                    required
                    // value={this.state.licenseNo}
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
                    placeholder="Driver Name"
                    required
                    // value={this.state.name}
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
                    placeholder="Driver Address"
                    required
                    // value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Vehicle No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="vehicleNo"
                    name="vehicleNo"
                    placeholder="Vehicle No"
                    required
                    // value={this.state.vehicleNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Vehicle Type :
                </label>
                <div className="ui fluid col-sm-9">
                  <select
                    className="form-control"
                    name="vehicleType"
                    // value={this.state.vehicleType}
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
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="Number"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="0766157878"
                    required
                    // value={this.state.phoneNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DriverRow text-end">
                <button
                  type="reset"
                  className="Driver-Button-Reset"
                  onClick={this.reset}
                >
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </button>
                <button type="submit" className="Driver-Button-Add">
                  <FontAwesomeIcon icon={faPlus} /> Add Driver
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
