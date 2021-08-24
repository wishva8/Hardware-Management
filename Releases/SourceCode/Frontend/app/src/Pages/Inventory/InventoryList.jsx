import React, { Component } from "react";
import "./InventoryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { inventoryURL } from "../../Services/endpoints";

export default class InventoryList extends Component {
  state = {
    itemNo: "",
    itemCategory: "",
    description: "",
    unitPrice: 0,
    inventoryNo: "",
    quantity: 0,
    items: [],
  };

  async componentDidMount() {
    const items = await axios.get(inventoryURL).then((result) => {
      this.setState({
        items: result.data,
      });
      //console.log(result.data);
    });
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Inventory Management" />
          <div className="ItemRow text-end">
            <button type="submit" className="Item-Button-Add">
              <FontAwesomeIcon icon={faPlus} /> Add Item
            </button>
            <button type="submit" className="Item-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table className="table table-bordered  Inventory">
              <tr className="InventoryListItems">
                <th className="ps-4">Item No.</th>
                <th className="ps-4">Description</th>
                <th className="ps-4">Item Category</th>
                <th className="ps-4">Unit Price</th>
                <th className="ps-4">Inventory No.</th>
                <th className="ps-4">Quantity</th>
                <th className="ps-4"></th>
              </tr>
              {items.map((item) => {
                return (
                  <tr
                    key={item.itemNo}
                    className="InventoryListItems text-white"
                  >
                    <td className="ps-4">{item.itemNo}</td>
                    <td className="ps-4">{item.description}</td>
                    <td className="ps-4">{item.itemCategory}</td>
                    <td className="ps-4">{item.unitPrice}</td>
                    <td className="ps-4">{item.inventoryNo}</td>
                    <td className="ps-4">{item.quantity}</td>
                    <td className="ps-4">
                      <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                      <FontAwesomeIcon size="2x" icon={faTrash} />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
