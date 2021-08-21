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
                  <label className="col-sm-3 col-form-label">
                    Description :
                  </label>
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
                      id="OrderDate"
                      name="OrderDate"
                      placeholder="Order Date"
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
                  <button type="reset" className="Order-Button-Reset">
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
