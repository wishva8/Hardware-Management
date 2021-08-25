import React, { Component } from "react";
import "./DeliveryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { deliveryURL } from "../../Services/endpoints";
import { Redirect } from "react-router";

export default class DeliveryList extends Component {
  state = {
    orderNo: "",
    description: "",
    address: "",
    customerName: "",
    customerPhoneNumber: "",
    status: 0,
    deliveries: [],
  };

  async componentDidMount() {
    const deliveries = await axios.get(deliveryURL).then((result) => {
      this.setState({
        deliveries: result.data,
      });
      console.log("Display data", result.data);
    });
  }
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createDelivery" />;
    }
  };
  render() {
    const { deliveries } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Delivery Management" />
          <div className="DeliveryRow text-end">
            {this.renderRedirect()}
            <button
              type="submit"
              className="Delivery-Button-List-Add"
              onClick={this.setRedirect}
            >
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
                    <td className="ps-4">{delivery.customerName}</td>
                    <td className="ps-4">{delivery.customerPhoneNumber}</td>
                    <td className="ps-4">{delivery.status}</td>
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
