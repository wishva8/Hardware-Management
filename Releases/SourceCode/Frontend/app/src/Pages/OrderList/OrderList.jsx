import React, { Component } from "react";
import "./OrderList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { orderURL } from "../../Services/endpoints";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteOrderURL } from "../../Services/endpoints";
import generatePDFOrders from "./OrderReport";

export default class OrderList extends Component {
  state = {
    orderId: "",
    description: "",
    itemId: "",
    quantity: "",
    unitPrice: "",
    totalPrice: "",
    date: "",
    customerName: "",
    customerPhoneNo: "",
    status: "",
    orders: [],
    redirect: false,
  };

  async componentDidMount() {
    await axios.get(orderURL).then((result) => {
      this.setState({
        orders: result.data,
      });
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createOrder" />;
    }
  };

  delete(orderId) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Do you want to delete " + orderId + " order?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "The order " + orderId + " has been deleted.",
            "success"
          );
          axios.delete(deleteOrderURL + orderId).then(() => {
            this.componentDidMount();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "The " + orderId + " order record is safe :)",
            "error"
          );
        }
      });
  }

  render() {
    const { orders } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Order Management" />
          <div className="OrderRow text-end">
            {this.renderRedirect()}
            <button
              type="submit"
              className="Order-Button-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Order
            </button>
            <button
              className="Order-Button-Report"
              onClick={() => {
                generatePDFOrders(this.state.orders);
              }}
            >
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  order" id="myTable">
              <tr class="orderListItems">
                <th className="ps-4">Order ID</th>
                <th className="ps-4">Order Description</th>
                <th className="ps-4">Item ID</th>
                <th className="ps-4">Quantity</th>
                <th className="ps-4">Unit Price</th>
                <th className="ps-4">Total Price</th>
                <th className="ps-4">Oder Date</th>
                <th className="ps-4">Customer Name</th>
                <th className="ps-4">Customer Phone</th>
                <th className="ps-4">Status</th>
                <th className="ps-4"></th>
              </tr>

              {orders.map((order) => {
                return (
                  <tr key={order.orderId} class="orderListItems text-white">
                    <td className="ps-4">{order.orderId}</td>
                    <td className="ps-4">{order.description}</td>
                    <td className="ps-4">{order.itemId}</td>
                    <td className="ps-4">{order.quantity}</td>
                    <td className="ps-4">{order.unitPrice}</td>
                    <td className="ps-4">{order.totalPrice}</td>
                    <td className="ps-4">{order.date}</td>
                    <td className="ps-4">{order.customerName}</td>
                    <td className="ps-4">{order.customerPhoneNo}</td>
                    <td className="ps-4">
                      {order.status ? "Completed" : "Pending"}
                    </td>
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("updateId", order.orderId);
                          window.location = "/updateOrder";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(order.orderId)}
                      />
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
