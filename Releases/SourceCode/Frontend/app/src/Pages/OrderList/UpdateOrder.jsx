import React, { Component } from "react";
import "./UpdateOrder.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { getOrderURLbyID, updateOrderURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class UpdateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: "",
      description: "",
      quantity: "",
      itemId: "",
      unitPrice: 0,
      totalPrice: 0,
      date: "",
      customerName: "",
      customerPhoneNo: "",
      status: "",
      orders: [],
    };
  }
  async componentDidMount() {
    let id = localStorage.getItem("updateId");
    await axios.get(getOrderURLbyID + id).then((result) => {
      this.setState({
        orderId: result.data.orderId,
        description: result.data.description,
        itemId: result.data.itemId,
        quantity: result.data.quantity,
        unitPrice: result.data.unitPrice,
        totalPrice: result.data.totalPrice,
        date: result.data.date,
        customerName: result.data.customerName,
        customerPhoneNo: result.data.customerPhoneNo,
        status: result.data.status,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("updateId");
    const data = {
      orderId: id,
      description: this.state.description,
      itemId: this.state.itemId,
      quantity: this.state.quantity,
      unitPrice: this.state.unitPrice,
      totalPrice: this.state.quantity*this.state.unitPrice,
      date: this.state.date,
      customerName: this.state.customerName,
      customerPhoneNo: this.state.customerPhoneNo,
      status: this.state.status,
    };
    console.log("Data to send", data);

    axios.put(updateOrderURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/orderList";
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Order Management" />
          <div className="CreateOrder">
            <div className="Order-Create-Heading-Container">
              <h3 className="Add-Order-Heading">Update Order</h3>
            </div>
            <div className="Order-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Order Id. :</label>
                  <div className="col-sm-9 ">
                    <input
                      style={{ backgroundColor: "#345454" }}
                      className="form-control "
                      type="text"
                      id="orderId"
                      name="orderId"
                      placeholder="Order Id"
                      readOnly="true"
                      required
                      value={this.state.orderId}
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
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Item No. :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="itemId"
                      name="itemId"
                      placeholder="Item No."
                      required
                      value={this.state.itemId}
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
                      value={this.state.unitPrice}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Quantity :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="Number"
                      id="quantity"
                      name="quantity"
                      placeholder="Quantity"
                      required
                      value={this.state.quantity}
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
                      style={{ backgroundColor: "#345454" }}
                      type="Number"
                      id="totalPrice"
                      name="totalPrice"
                      placeholder="Total Price"
                      required
                      readOnly="true"
                      value={this.state.quantity*this.state.unitPrice}
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
                      value={this.state.date}
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
                      value={this.state.customerName}
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
                      value={this.state.customerPhoneNo}
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
                      value={this.state.status}
                      onChange={this.handleChange}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                <div className="OrderRow">
                  <button type="submit" className="Order-Button-Update">
                    <FontAwesomeIcon icon={faCheckCircle} /> Update Order
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
