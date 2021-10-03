import React, { Component } from "react";
import "./CreateItem.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { addinventoryURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNo: "",
      itemCategory: "",
      description: "",
      unitPrice: 0,
      inventoryNo: "",
      quantity: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      itemNo: this.state.itemNo,
      itemCategory: this.state.itemCategory,
      description: this.state.description,
      unitPrice: this.state.unitPrice,
      quantity: this.state.quantity,
    };

    const res = axios.post(addinventoryURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful",
      }).then(() => {
        window.location = "/inventoryList";
      });
    });
  };

  reset() {
    const res = {
      itemNo: "",
      itemCategory: "",
      description: "",
      unitPrice: 0,
      quantity: 0,
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
                      pattern="[A-Z,0-9]{6}"
                      placeholder="ITM000"
                      required
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
                      placeholder="Item Category"
                      onChange={this.handleChange}
                    >
                      <option hidden>-Select-</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Tools">Tools</option>
                      <option value="Paint">Paint</option>
                      <option value="Sand">Sand</option>
                    </select>
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
                      placeholder="Item Description"
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
                      placeholder="200"
                      required
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
                      placeholder="20"
                      required
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
