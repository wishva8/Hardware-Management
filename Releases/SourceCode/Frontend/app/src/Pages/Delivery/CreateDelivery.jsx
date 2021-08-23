import React, { Component } from "react";
import "./CreateDelivery.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";

export default class CreateDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryNo: "",
      orderNo: "",
      description: "",
      address: "",
      customerName: "",
      customerPhone: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      deliveryNo: this.state.deliveryNo,
      orderNo: this.state.orderNo,
      description: this.state.description,
      address: this.state.address,
      customerName: this.state.customerName,
      customerPhone: this.state.customerPhone,
    };
    console.log(data);
  };

  reset() {
    const res = {
      deliveryNo: "",
      orderNo: "",
      description: "",
      address: "",
      customerName: "",
      customerPhone: "",
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
                <label className="col-sm-3 col-form-label">Delivery No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="deliveryNo"
                    name="deliveryNo"
                    placeholder="Delivery No."
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
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
                    id="Description"
                    name="Description"
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
                    id="Address"
                    name="Address"
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
                    type="Number"
                    id="customerPhone"
                    name="customerPhone"
                    placeholder="0766157878"
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
