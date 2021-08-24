import React, { Component } from "react";
import "./DriverList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { driverURL } from "../../Services/endpoints";

export default class DriverList extends Component {
  state = {
    licenceNo: "",
    name: "",
    address: "",
    vehicleNo: "",
    vehicleType: "",
    phoneNo: "",
    drivers: [],
  };

  async componentDidMount() {
    const drivers = await axios.get(driverURL).then((result) => {
      console.log(result.data);
      this.setState({
        drivers: result.data,
      });
    });
  }

  render() {
    const {drivers} = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Drivers" />
          <div className="DriverRow">
            <button type="submit" className="Driver-Button-List-Add">
              <FontAwesomeIcon icon={faPlus} /> Add Driver
            </button>
            <button type="reset" className="Driver-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table className="table table-bordered  driverList">
              <tr className="driverListItems">
                <th className="ps-4">License No</th>
                <th className="ps-4">Name</th>
                <th className="ps-4">Address</th>
                <th className="ps-4">Vehicle No</th>
                <th className="ps-4">Vehicle Type</th>
                <th className="ps-4">Phone No</th>
                <th className="ps-4"></th>
              </tr>
              {drivers.map((driver) => {
              return (<tr key={driver.licenseNo} className="orderListItems text-white">
                <td className="ps-4">{driver.licenceNo}</td>
                <td className="ps-4">{driver.name}</td>
                <td className="ps-4">{driver.address}</td>
                <td className="ps-4">{driver.vehicleNo}</td>
                <td className="ps-4">{driver.vehicleType}</td>
                <td className="ps-4">{driver.phoneNo}</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>)
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
