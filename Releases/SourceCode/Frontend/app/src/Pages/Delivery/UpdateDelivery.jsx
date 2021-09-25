import React, { Component } from "react";
import "./UpdateDelivery.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";

export default class UpdateDelivery extends Component {
  // constructor(props) {
  //   super(props);
  //   this.
  // }
  state = {
    deliveryNo: 0,
    orderNo: "",
    description: "",
    address: "",
    customerName: "",
    customerPhone: "",
    delivery: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    // const items = await axios.get().then((result) => {
    //   this.setState({
    //     items: result.data,
    //   });
    //   console.log(result.data);
    // });
    const delivery = await axios
      .get("http://localhost:9091/delivery/getDeliveryById/" + 9)
      .then((result) => {
        this.setState({
          orderNo: result.data.orderNo,
          description: result.data.description,
          address: result.data.address,
          customerName: result.data.customerName,
          customerPhone: result.data.customerPhone,
        });
        console.log(result.data);
      });
  }

  edit(deliveryNo) {
    axios
      .get("http://localhost:9091/delivery/getDeliveryById/" + deliveryNo)
      .then((res) => {
        this.setState({
          // deliveryNo: res.data.deliveryNo,
          orderNo: res.data.orderNo,
          description: res.data.description,
          address: res.data.address,
          customerName: res.data.customerName,
          customerPhone: res.data.customerPhone,
        });
        console.log(res);
      });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {

  //     deliveryNo: this.state.deliveryNo,
  //     orderNo: this.state.orderNo,
  //     description: this.state.description,
  //     customerName: this.state.customerName,
  //     customerPhone: this.state.customerPhone,
  //   };
  //   console.log("Data to send", data);

  //   const res = axios.put(addOrderURL, data).then(() => {
  //     Swal.fire({
  //       icon: "success",
  //       title: "Update Successful!!!",
  //     }).then(() => {
  //       window.location.reload(false);
  //     });
  //   });
  // };

  render() {
    return (
      <div className="UpdateDelivery">
        <SideNav />
        <div className="content-layer">
          <Header topic="Delivery Management" />
          <div className="Delivery-Update-Heading-Container">
            <h3 className="Update-Delivery-Heading">Update Delivery</h3>
          </div>
          <div className="Delivery-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">License No :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="licenseNo"
                    name="orderNo"
                    placeholder="License No"
                    required
                    value={this.state.orderNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Name :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="name"
                    name="description"
                    placeholder="Driver Name"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Address :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Driver Address"
                    required
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Vehicle No :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="text"
                    id="vehicleNo"
                    name="vehicleNo"
                    placeholder="Vehicle No"
                    required
                    value={this.state.vehicleNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Vehicle Type :
                </label>
                <div class="col-sm-9">
                  <select
                    class="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="Lorry">Lorry</option>
                    <option value="Tipper">Tipper</option>
                    <option value="Land Master">Land Master</option>
                    <option value="Flat Bed">Flat Bed</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Phone No :</label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    type="Number"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="0766157878"
                    required
                    value={this.state.phoneNo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DeliveryRow">
                <button type="submit" className="Delivery-Button-Update">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Delivery
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
