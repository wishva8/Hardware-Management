import React, { Component } from "react";
import "./CreateOrder.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";

export default class CreateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: "",
      description: "",
      itemNo: "",
      unitPrice: 0,
      totalPrice: 0,
      date: "",
      customerName: "",
      customerPhoneNo: "",
      status: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      orderId: this.state.orderId,
      description: this.state.description,
      itemNo: this.state.itemNo,
      unitPrice: this.state.unitPrice,
      totalPrice: this.state.totalPrice,
      date: this.state.date,
      customerName: this.state.customerName,
      customerPhoneNo: this.state.customerPhoneNo,
      status: this.state.status,
    };
    console.log(data);

    const res = addOrderURL(data);
  };

  reset() {
    const res = {
      orderId: "",
      description: "",
      itemNo: "",
      unitPrice: 0,
      totalPrice: 0,
      date: "",
      customerName: "",
      customerPhoneNo: "",
      status: "",
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
                  <label className="col-sm-3 col-form-label">Order Id. :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="orderId"
                      name="orderId"
                      placeholder="Order Id"
                      required
                      // value={this.state.OrderNo}
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
                      // value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Item No. :</label>
                  <div className="ui fluid col-sm-9">
                    <select
                      className="form-control"
                      name="itemNo"
                      // value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option value="ITM001">ITM001</option>
                      <option value="ITM002">ITM002</option>
                      <option value="ITM003">ITM003</option>
                      <option value="ITM004">ITM004</option>
                    </select>
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
                      // value={this.state.unitPrice}
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
                      id="totalPrice"
                      name="totalPrice"
                      placeholder="Total Price"
                      required
                      // value={this.state.unitPrice}
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
                      // value={this.state.orderDate}
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
                      // value={this.state.customerName}
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
                      // value={this.state.customerName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Status :</label>
                  <div className="ui fluid col-sm-9">
                    <select
                      className="form-control"
                      name="status"
                      // value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
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
