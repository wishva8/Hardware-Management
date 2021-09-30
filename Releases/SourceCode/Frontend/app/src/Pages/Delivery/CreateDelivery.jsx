import React, { Component } from "react";
import "./CreateDelivery.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { addDeliveryURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class CreateDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNo: "",
      description: "",
      address: "",
      customerName: "",
      customerPhoneNumber: 0,
      status: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      orderNo: this.state.orderNo,
      description: this.state.description,
      address: this.state.address,
      customerName: this.state.customerName,
      customerPhoneNumber: this.state.customerPhoneNumber,
      status: this.state.status,
    };
    console.log("Data to send", data);

    const res = axios.post(addDeliveryURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!",
      }).then(() => {
        window.location = "/deliveryList";
      });
    });
  };

  reset() {
    const res = {
      orderNo: "",
      description: "",
      address: "",
      customerName: "",
      customerPhoneNumber: "",
      status: "",
    };
  }
  render() {
    return (
      <div className="CreateDelivery">
        <SideNav />
        <div className="content-layer">
          <Header topic="Delivery Management" />
          <div className="Delivery-Create-Heading-Container">
            <h3 className="Add-Delivery-Heading">Add Delivery</h3>
          </div>
          <div className="Delivery-Create-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Order No. :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="orderNo"
                    name="orderNo"
                    placeholder="Order No."
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Description :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
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
                    placeholder="Address"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Customer Name :
                </label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="customerName"
                    name="customerName"
                    placeholder="Customer Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Customer Phone :
                </label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="tel"
                    id="customerPhoneNumber"
                    name="customerPhoneNumber"
                    placeholder="0766157878"
                    pattern="[0-9]{10}"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DeliveryRow text-end">
                <button
                  type="reset"
                  className="Delivery-Button-Reset"
                  onClick={this.reset}
                >
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </button>
                <button type="submit" className="Delivery-Button-Add">
                  <FontAwesomeIcon icon={faPlus} /> Add Delivery
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
