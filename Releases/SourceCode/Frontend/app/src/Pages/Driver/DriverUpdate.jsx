import React, { Component } from "react";

export default class DriverUpdate extends Component {
  render() {
    return (
      <div className="UpdateDriver">
        <div className="Driver-Update-Heading-Container">
          <h3>Update Driver</h3>
        </div>
        <div className="Driver-Update-Heading-Container">
          <form onSubmit={"/"}>
            <div className="DriverRow">
              <label className="DiverLabel">License No : </label>
              <input
                className="DriverText"
                type="text"
                id="licenseNo"
                name="licenseNo"
                placeholder="License No"
                required
                value=""
                onChange=""
              />
            </div>
            <div className="DriverRow">
              <label className="DriverLabel">Name : </label>
              <input
                className="DriverText"
                type="text"
                id="name"
                name="name"
                placeholder="Driver Name"
                required
                value=""
                onChange=""
              />
            </div>
            <div className="DriverRow">
              <label className="DriverLabel">Address : </label>
              <input
                className="DriverText"
                type="text"
                id="address"
                name="address"
                placeholder="Driver Address"
                required
                value=""
                onChange=""
              />
            </div>
            <div className="DriverRow">
              <label className="DriverLabel">Vehicle No : </label>
              <input
                className="DriverText"
                type="text"
                id="vehicleNo"
                name="vehicleNo"
                placeholder="Vehicle No"
                required
                value=""
                onChange=""
              />
            </div>
            <div className="DriverRow">
              <label className="DriverLabel">Vehicle type : </label>
              <select value="VehicleType">
                <option value="Lorry">Lorry</option>
                <option value="Tipper">Tipper</option>
                <option value="Land Master">Land Master</option>
                <option value="Flat Bed">Flat Bed</option>
              </select>
            </div>
            <div className="DriverRow">
              <label className="DriverLabel">Phone No : </label>
              <input
                className="DriverText"
                type="Number"
                id="phoneNo"
                name="phoneNo"
                placeholder="0766157878"
                required
                value=""
                onChange=""
              />
            </div>
            <div className="DriverRow">
              <input className="Button" type="submit" value="Reset" />
              <input className="Button" type="submit" value="Add Driver" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
