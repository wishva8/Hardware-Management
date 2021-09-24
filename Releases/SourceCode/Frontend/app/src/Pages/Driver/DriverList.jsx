import React, { Component } from "react";
import "./DriverList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faDownload,
  faPlus,
  faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { driverURL } from "../../Services/endpoints";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default class DriverList extends Component {
  state = {
    licenceNo: "",
    name: "",
    address: "",
    vehicleNo: "",
    vehicleType: "",
    phoneNo: "",
    drivers: [],
    redirect: false,
  };

  async componentDidMount() {
    const drivers = await axios.get(driverURL).then((result) => {
      console.log(result.data);
      this.setState({
        drivers: result.data,
      });
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createDriver" />;
    }
  };

  delete(licenceNo) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you want to delete " + licenceNo + " order?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your driver " + licenceNo + " has been deleted.",
            "success"
          );
          axios
            .delete(
              "http://localhost:9091/driver/deleteDriverById/" + licenceNo
            )
            .then(() => {
              console.log(licenceNo);
              this.componentDidMount();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your " + licenceNo + " driver record is safe :)",
            "error"
          );
        }
      });
  }

  render() {
    const { drivers } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Drivers" />
          <div className="DriverRow">
            {this.renderRedirect()}
            <button
              type="submit"
              className="Driver-Button-List-Add"
              onClick={this.setRedirect}
            >
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
                return (
                  <tr
                    key={driver.licenceNo}
                    className="orderListItems text-white"
                  >
                    <td className="ps-4">{driver.licenceNo}</td>
                    <td className="ps-4">{driver.name}</td>
                    <td className="ps-4">{driver.address}</td>
                    <td className="ps-4">{driver.vehicleNo}</td>
                    <td className="ps-4">{driver.vehicleType}</td>
                    <td className="ps-4">{driver.phoneNo}</td>
                    <td className="ps-4">
                      <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(driver.licenceNo)}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
