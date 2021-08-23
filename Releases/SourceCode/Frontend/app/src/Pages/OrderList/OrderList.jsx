import React, { Component } from "react";
import "./OrderList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";

export default class OrderList extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Order Management" />
          <div className="OrderRow text-end">
            <button type="submit" className="Order-Button-Add">
              <FontAwesomeIcon icon={faPlus} /> Add Order
            </button>
            <button type="submit" className="Order-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table className="table table-bordered  order">
              <tr className="orderListItems">
                <th className="ps-4">Order Id</th>
                <th className="ps-4">Description</th>
                <th className="ps-4">Item No</th>
                <th className="ps-4">Unit Price</th>
                <th className="ps-4">Total Price</th>
                <th className="ps-4">Date</th>
                <th className="ps-4">Customer Name</th>
                <th className="ps-4">Customer Phone No</th>
                <th className="ps-4">Status</th>
                <th className="ps-4"></th>
              </tr>
              <tr className="orderListItems text-white">
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr className="orderListItems text-white">
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr className="orderListItems text-white">
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">Test</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
