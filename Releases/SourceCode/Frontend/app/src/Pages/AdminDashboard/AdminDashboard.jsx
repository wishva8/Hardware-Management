import React, { Component } from "react";
import SideNav from "../../Components/SideNav/SideNav";
import "./AdminDashboard.css";
import Header from "../../Components/Header/Header";
export default class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Dashboard" />
          <div>
            {/* methana ubata ona tika */}
          </div>
        </div>
      </div>
    );
  }
}
