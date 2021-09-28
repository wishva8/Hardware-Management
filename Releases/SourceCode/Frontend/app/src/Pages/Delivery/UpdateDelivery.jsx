import React, { Component } from "react";
import "./UpdateDelivery.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import {
  getDeliveryURLbyId,
  updateDeliveryURL,
} from "../../Services/endpoints";

export default class UpdateDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryNo: 0,
      orderNo: "",
      description: "",
      address: "",
      customerName: "",
      customerPhoneNumber: "",
      delivery: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    let id = localStorage.getItem("updateId");
    await axios.get(getDeliveryURLbyId + id).then((result) => {
      this.setState({
        orderNo: result.data.orderNo,
        description: result.data.description,
        address: result.data.address,
        customerName: result.data.customerName,
        customerPhoneNumber: result.data.customerPhoneNumber,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("updateId");
    const data = {
      deliveryNo: id,
      orderNo: this.state.orderNo,
      description: this.state.description,
      address: this.state.address,
      customerName: this.state.customerName,
      customerPhoneNumber: this.state.customerPhoneNumber,
    };

    axios.put(updateDeliveryURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/deliveryList";
      });
    });
  };

  render() {
    return (
      <div className="UpdateDelivery">
        <SideNav />
        <div className="content-layer">
          <Header topic="Delivery Management" />
          <div className="Delivery-Update-Heading-Container">
            <h3 className="Update-Delivery-Heading">Update Delivery</h3>
          </div>
          <div className="Delivery-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Order No. :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="orderNo"
                    name="orderNo"
                    placeholder="Order No"
                    required
                    value={this.state.orderNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Description :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                    required
                    value={this.state.description}
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
                    placeholder="Address"
                    required
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Customer Name:
                </label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="customerName"
                    name="customerName"
                    placeholder="Customer Name"
                    required
                    value={this.state.customerName}
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
                    id="customerPhoneNumber"
                    name="customerPhoneNumber"
                    placeholder="0766157878"
                    required
                    value={this.state.customerPhoneNumber}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DeliveryRow">
                <button type="submit" className="Delivery-Button-Update">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Delivery
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
