import React, { Component } from "react";
import "./UpdateItems.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";

export default class UpdateItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNo: "",
      itemCategory: "",
      description: "",
      unitPrice: 0,
      inventoryNo: "",
      qty: 0,
    };
  }
  state = {
    itemNo: "",
    itemCategory: "",
    description: "",
    unitPrice: 0,
    inventoryNo: "",
    qty: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    alert(this.state.value);
  };
  render() {
    return (
      <div className="UpdateItem">
        <SideNav />
        <div className="content-layer">
          <Header topic="Inventory Management" />
          <div className="Item-Update-Heading-Container">
            <h3 className="Update-Item-Heading">Update Item</h3>
          </div>
          <div className="Item-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Item No. :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="itemNo"
                    name="itemNo"
                    placeholder="Item No"
                    required
                    value={this.state.itemNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Item Category :
                </label>
                <div class="ui fluid col-sm-9" role="listbox" tabindex="0">
                  <select
                    class="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="Electrical">Electrical</option>
                    <option value="Tools">Tools</option>
                    <option value="Paint">Paint</option>
                    <option value="Sand">Sand</option>
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
                    placeholder="Item Description"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Unit Price :</label>
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
                <label className="col-sm-3 col-form-label">Inventory No:</label>
                <div class="ui fluid col-sm-9" role="listbox" tabindex="0">
                  <select
                    class="form-control"
                    value={this.state.value1}
                    onChange={this.handleChange}
                  >
                    <option value1="INV1">INV1</option>
                    <option value1="INV2">INV2</option>
                    <option value1="INV3">INV3</option>
                    <option value1="INV4">INV4</option>
                    <option value1="INV5">INV5</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Quantity :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="Number"
                    id="qty"
                    name="qty"
                    placeholder="Quantity"
                    required
                    value={this.state.qty}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="ItemRow">
                <button type="submit" className="Item-Button-Update">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
