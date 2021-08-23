import React, { Component } from "react";
import "./CreateItem.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";

export default class CreateItem extends Component {
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
  // state = {
  //   itemNo: "",
  //   itemCategory: "",
  //   description: "",
  //   unitPrice: 0,
  //   inventoryNo: "",
  //   qty: 0,
  // };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios.post("http://localhost:9091/inventory/addItem").then((result) => {});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      itemNo: this.state.itemNo,
      itemCategory: this.state.itemCategory,
      description: this.state.description,
      unitPrice: this.state.unitPrice,
      inventoryNo: this.state.inventoryNo,
      qty: this.state.qty,
    };
    console.log(data);
  };

  reset() {
    const res = {
      itemNo: "",
      itemCategory: "",
      description: "",
      unitPrice: 0,
      inventoryNo: "",
      qty: 0,
    };
  }
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Inventory Management" />
          <div className="CreateItem">
            <div className="Item-Create-Heading-Container">
              <h3 className="Add-Item-Heading">Add Item</h3>
            </div>
            <div className="Item-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Item No. :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="itemNo"
                      name="itemNo"
                      placeholder="Item No"
                      required
                      // value={this.state.itemNo}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Item Category :
                  </label>
                  <div className="ui fluid col-sm-9">
                    <select
                      className="form-control"
                      name="itemCategory"
                      // value={this.state.value}
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
                  <label className="col-sm-3 col-form-label">
                    Description :
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Item Description"
                      required
                      // value={this.state.description}
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
                      // value={this.state.unitPrice}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Inventory No:
                  </label>
                  <div className="ui fluid col-sm-9">
                    <select
                      className="form-control"
                      name="inventoryNo"
                      // value={this.state.value1}
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
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="Number"
                      id="qty"
                      name="qty"
                      placeholder="Quantity"
                      required
                      // value={this.state.qty}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="ItemRow text-end">
                  <button
                    type="reset"
                    className="Item-Button-Inventory-Reset"
                    onClick={this.reset}
                  >
                    <FontAwesomeIcon icon={faRedo} /> Reset
                  </button>
                  <button type="submit" className="Item-Button-Inventory-Add">
                    <FontAwesomeIcon icon={faPlus} /> Add Item
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
