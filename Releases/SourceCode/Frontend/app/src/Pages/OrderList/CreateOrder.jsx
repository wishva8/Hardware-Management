import React, { Component } from "react";
import "./CreateOrder.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { addOrderURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class CreateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      itemId: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0,
      date: "",
      customerName: "",
      customerPhoneNo: "",
      status: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      description: this.state.description,
      itemId: this.state.itemId,
      quantity: this.state.quantity,
      unitPrice: this.state.unitPrice,
      totalPrice: this.state.quantity * this.state.unitPrice,
      date: this.state.date,
      customerName: this.state.customerName,
      customerPhoneNo: this.state.customerPhoneNo,
      status: this.state.status,
    };

    const res = axios.post(addOrderURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!!",
      }).then(() => {
        window.location = "/orderList";
      });
    });
  };

  reset() {
    const res = {
      description: "",
      itemId: "",
      unitPrice: 0,
      totalPrice: 0,
      date: "",
      customerName: "",
      customerPhoneNo: "",
    };
  }

  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Order Management" />
          <div className="CreateOrder">
            <div className="Order-Create-Heading-Container">
              <h3 className="Add-Order-Heading">Add Order</h3>
            </div>
            <div className="Order-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Item No. :</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="itemId"
                      name="itemId"
                      placeholder="Item Id"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Unit Price :
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="Number"
                      id="unitPrice"
                      name="unitPrice"
                      placeholder="Unit Price"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Quantity :</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      name="quantity"
                      type="number"
                      placeholder="Quantity"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Total Price :
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="Number"
                      style={{ backgroundColor: "#345454" }}
                      id="totalPrice"
                      name="totalPrice"
                      placeholder="Total Price"
                      readOnly="true"
                      required
                      value={this.state.unitPrice*this.state.quantity}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Order Date:</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      type="date"
                      id="date"
                      name="date"
                      placeholder="Order Date"
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
                    Customer Phone No:
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="customerPhoneNo"
                      name="customerPhoneNo"
                      placeholder="Customer Phone Number"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Description :
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Order Description"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="OrderRow text-end">
                  <button
                    type="reset"
                    className="Order-Button-Reset"
                    onClick={this.reset}
                  >
                    <FontAwesomeIcon icon={faRedo} /> Reset
                  </button>
                  <button type="submit" className="Order-Button-Add">
                    <FontAwesomeIcon icon={faPlus} /> Add Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
