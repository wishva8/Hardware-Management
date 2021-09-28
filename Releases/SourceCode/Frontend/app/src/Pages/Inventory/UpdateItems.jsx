import React, { Component } from "react";
import "./UpdateItems.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import {
  getInventoryURLbyID,
  updateInventoryURL,
} from "../../Services/endpoints";

export default class UpdateItems extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    itemNo: "",
    itemCategory: "",
    description: "",
    unitPrice: 0,
    inventoryNo: 0,
    quantity: 0,
    items: [],
  };

  async componentDidMount() {
    let invenID = localStorage.getItem("updateId");
    await axios.get(getInventoryURLbyID + invenID).then((result) => {
      this.setState({
        inventoryNo: result.data.inventoryNo,
        itemNo: result.data.itemNo,
        itemCategory: result.data.itemCategory,
        description: result.data.description,
        unitPrice: result.data.unitPrice,
        quantity: result.data.quantity,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let invenID = localStorage.getItem("updateId");
    const data = {
      inventoryNo: invenID,
      itemNo: this.state.itemNo,
      itemCategory: this.state.itemCategory,
      description: this.state.description,
      unitPrice: this.state.unitPrice,
      quantity: this.state.quantity,
    };
    axios.put(updateInventoryURL, data).then((res) => {
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/inventoryList";
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
                <label className="col-sm-3 col-form-label">
                  Inventory No. :
                </label>
                <div class="col-sm-9">
                  <input
                    style={{ backgroundColor: "#345454" }}
                    class="form-control"
                    type="Number"
                    id="inventoryNo"
                    name="inventoryNo"
                    readOnly="true"
                    placeholder="Inventory No."
                    required
                    value={this.state.inventoryNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
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
                    name="itemCategory"
                    value={this.state.itemCategory}
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
                <label className="col-sm-3 col-form-label">Quantity :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
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
              <div className="ItemRow">
                <button
                  type="submit"
                  className="Item-Button-Update"
                  onClick={{}}
                >
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
