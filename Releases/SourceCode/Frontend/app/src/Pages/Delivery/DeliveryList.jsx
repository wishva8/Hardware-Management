import React, { Component } from "react";
import "./DeliveryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import { Redirect } from "react-router-dom";

export default class DeliveryList extends Component {
  state = {
    deliveryNo: "",
    orderNo: "",
    description: "",
    address: "",
    customerName: "",
    customerPhone: "",
    deliveries: [],
    redirect: false,
  };

  setRedirect = () => {
    this.setState ({
      redirect: true,
    })
  }

  renderRedirect = () => {
    if(this.state.redirect) {
      return <Redirect to="/createDelivery" />
    }
  }
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Delivery Management" />
          <div className="DeliveryRow">
            {this.renderRedirect()}
            <button type="submit" className="Delivery-Button-List-Add" onClick={this.setRedirect}>
              <FontAwesomeIcon icon={faPlus} /> Add Delivery
            </button>
            <button type="reset" className="Delivery-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  DeliveryList">
              <tr class="DeliveryListItems">
                <th className="ps-4">Delivery No</th>
                <th className="ps-4">Order No</th>
                <th className="ps-4">Description</th>
                <th className="ps-4">Address</th>
                <th className="ps-4">Customer Name</th>
                <th className="ps-4">Customer Phone</th>
                <th className="ps-4"></th>
              </tr>
              <tr class="orderListItems text-white">
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
              <tr class="orderListItems text-white">
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
              <tr class="orderListItems text-white">
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
