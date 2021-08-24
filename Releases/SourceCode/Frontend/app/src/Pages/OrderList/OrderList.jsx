import React, { Component } from "react";
import "./OrderList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import { getOrders } from "../../Services/orders";
import axios from "axios";
import { orderURL } from "../../Services/endpoints";
import { Redirect } from "react-router-dom";

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
    const orders = await axios.get(orderURL).then((result) => {
      // console.log(result.data);
      this.setState({
        orders: result.data,
      });
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createOrder" />
    }
  }

  render() {
    const { orders } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Order Management" />
          <div className="OrderRow text-end">
            {this.renderRedirect()}
            <button type="submit" className="Order-Button-Add" onClick={this.setRedirect}>
              <FontAwesomeIcon icon={faPlus} /> Add Order
            </button>
            <button type="submit" className="Order-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  order">
        
                <tr class="orderListItems">
                  <th className="ps-4">Test1</th>
                  <th className="ps-4">Test 2</th>
                  <th className="ps-4">Test 3</th>
                  <th className="ps-4">Test 4</th>
                  <th className="ps-4">Test 5</th>
                  <th className="ps-4">Test 6</th>
                  <th className="ps-4"></th>
                </tr>
  
                {orders.map((order)  => {
                  return (<tr key={order.orderId} class="orderListItems text-white">
                    <td className="ps-4">{order.customerName}</td>
                    <td className="ps-4">Test</td>
                    <td className="ps-4">Test</td>
                    <td className="ps-4">{order.customerName}</td>
                    <td className="ps-4">Test</td>
                    <td className="ps-4">Test</td>
                    <td className="ps-4">
                      <FontAwesomeIcon size="2x" icon={faEdit} />
                      <FontAwesomeIcon size="2x" icon={faTrash} />
                    </td>
                  </tr>)
                })}

            </table>
          </div>
        </div>
      </div>
    );
  }
}
