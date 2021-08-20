import React, { Component } from "react";
import "./DriverCreate.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  // state = {
  //     licenseNo: "",
  //     name: "",
  //     address: "",
  //     vehicleNo: "",
  //     // vehicleType: "",
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
      <div className="CreateDriver">
        <div className="Driver-Create-Heading-Container">
          <h3 className="Add-Driver-Heading">Add Driver</h3>
        </div>
        <div className="Driver-Create-Body-Container">
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
              <div class="ui fluid col-sm-9" role="listbox" tabindex="0">
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
              <button type="reset" className="Driver-Button-Reset">
              <FontAwesomeIcon icon={faRedo} /> Reset
              </button>
              <button type="submit" className="Driver-Button-Add">
              <FontAwesomeIcon icon={faPlus} /> Add Driver
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
