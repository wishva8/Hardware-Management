import React, { Component } from "react";
import "./DeliveryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { deleteDeliveryURL, deliveryURL } from "../../Services/endpoints";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
import generatePDF from "./DeliverReportGenaration";
import { Link } from "react-router-dom";

export default class DeliveryList extends Component {
  state = {
    deliveryNo: 0,
    orderNo: "",
    description: "",
    address: "",
    customerName: "",
    customerPhoneNumber: "",
    status: 0,
    deliveries: [],
  };

  async componentDidMount() {
    await axios.get(deliveryURL).then((result) => {
      this.setState({
        deliveries: result.data,
      });
    });
  }

  delete(deliveryNo) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you want to delete " + deliveryNo + " delivery?",
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
            "Your delivery " + deliveryNo + " has been deleted.",
            "success"
          );
          axios.delete(deleteDeliveryURL + deliveryNo).then(() => {
            this.componentDidMount();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your " + deliveryNo + " delivery record is safe :)",
            "error"
          );
        }
      });
  }
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createDelivery" />;
    }
  };

  render() {
    const { deliveries } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Delivery Management" />
          <div className="DeliveryRow text-end">
            {this.renderRedirect()}
            <button
              type="button"
              className="Delivery-Button-List-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Delivery
            </button>
            <button
              type="button"
              className="Delivery-Button-Report"
              onClick={() => {
                generatePDF(this.state.deliveries);
              }}
            >
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  DeliveryList" id="myTable">
              <tr class="DeliveryListItems">
                <th className="ps-4">Order No</th>
                <th className="ps-4">Description</th>
                <th className="ps-4">Address</th>
                <th className="ps-4">Customer Name</th>
                <th className="ps-4">Customer Phone</th>
                <th className="ps-4">Status</th>
                <th className="ps-4"></th>
              </tr>
              {deliveries.map((delivery) => {
                return (
                  <tr
                    key={delivery.orderNo}
                    className="DeliveryListItems text-white"
                  >
                    <td className="ps-4">{delivery.orderNo}</td>
                    <td className="ps-4">{delivery.description}</td>
                    <td className="ps-4">{delivery.address}</td>
                    <td className="ps-4">{delivery.customerName}</td>
                    <td className="ps-4">{delivery.customerPhoneNumber}</td>
                    <td className="ps-4">
                      {delivery.status ? "Completed" : "Pending"}
                    </td>
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("updateId", delivery.deliveryNo);
                          window.location = "/updateDelivery";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(delivery.deliveryNo)}
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
