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
import axios from "axios";
import { deliveryURL } from "../../Services/endpoints";

export default class DeliveryList extends Component {
  state = {
    deliveryNo: "",
    orderNo: "",
    description: "",
    address: "",
    customerName: "",
    customerPhoneNumber: "",
    status: "0",
    deliveries: [],
  };

  async componentDidMount() {
    const delivery = await axios.get(deliveryURL).then((result) => {
      this.setState({
        delivery: result.data,
      });
      console.log("Display data", result.data);
    });
  }

  render() {
    const { deliveries } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Delivery Management" />
          <div className="DeliveryRow">
            <button type="submit" className="Delivery-Button-List-Add">
              <FontAwesomeIcon icon={faPlus} /> Add Delivery
            </button>
            <button type="reset" className="Delivery-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  DeliveryList">
              <tr class="DeliveryListItems">
                <th className="ps-4">Order No</th>
                <th className="ps-4">Description</th>
                <th className="ps-4">Address</th>
                <th className="ps-4">Customer Name</th>
                <th className="ps-4">Customer Phone</th>
                <th className="ps-4">Status</th>
                <th className="ps-4"></th>
              </tr>
              {deliveries.map((delivery) => {
                return (
                  <tr
                    key={delivery.orderNo}
                    className="DeliveryListItems text-white"
                  >
                    <td className="ps-4">{delivery.orderNo}</td>
                    <td className="ps-4">{delivery.description}</td>
                    <td className="ps-4">{delivery.address}</td>
                    <td className="ps-4">{delivery.unitPrice}</td>
                    <td className="ps-4">{delivery.inventoryNo}</td>
                    <td className="ps-4">{delivery.quantity}</td>
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
