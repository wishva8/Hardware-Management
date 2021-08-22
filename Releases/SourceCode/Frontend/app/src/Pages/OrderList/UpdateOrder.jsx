import React, { Component } from "react";
import "./UpdateOrder.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";

export default class UpdateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNo: "",
      itemNo: "",
      description: "",
      price: 0,
      orderDate: "",
      customerName: "",
    };
  }
  state = {
    orderNo: "",
    itemNo: "",
    description: "",
    price: 0,
    orderDate: "",
    customerName: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    alert(this.state.value);
  };
  render() {
    return (
      <div className="UpdateOrder">
        <SideNav />
        <div className="content-layer">
          <Header topic="Order Management" />
          <div className="Order-Update-Heading-Container">
            <h3 className="Update-Order-Heading">Update Order</h3>
          </div>
          <div className="Order-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Order No. :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="OrderNo"
                    name="OrderNo"
                    placeholder="Order No"
                    required
                    value={this.state.OrderNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Item No. :</label>
                <div class="ui fluid col-sm-9" role="listbox" tabindex="0">
                  <select
                    class="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="ITM001">ITM001</option>
                    <option value="ITM002">ITM002</option>
                    <option value="ITM003">ITM003</option>
                    <option value="ITM004">ITM004</option>
                  </select>
                </div>
              </div>
              <div className="mb-5 row">
                <label className="col-sm-3 col-form-label">Description :</label>
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
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
                <label className="col-sm-3 col-form-label">Price :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
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
                <label className="col-sm-3 col-form-label">Order Date:</label>
                <div class="ui fluid col-sm-9" role="listbox" tabindex="0">
                  <input
                    class="form-control"
                    type="date"
                    id="qty"
                    name="qty"
                    placeholder="Quantity"
                    required
                    value={this.state.orderDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Customer Name :
                </label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="CustomerName"
                    name="CustomerName"
                    placeholder="Customer Name"
                    required
                    value={this.state.customerName}
                    onChange={this.handleChange}
                  />
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
    );
  }
}
