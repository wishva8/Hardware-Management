import React, { Component } from "react";
import SideNav from "../../Components/SideNav/SideNav";
import "./AdminDashboard.css";
import Header from "../../Components/Header/Header";
import Graph from "../../Components/Graph/Graph";

export default class AdminDashboard extends Component {
  state = {
    time: "",
    date: "",
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.timedate();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timedate() {
    const time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var am = "AM";
    if (h == 12) {
      var am = "PM";
    } else if (h > 12) {
      h = h - 12;
      am = "PM";
    }
    if (h > 12) {
      h = h - 12;
      am = "PM";
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    var timeArrange = h + ":" + m + ":" + s + " " + am;

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[time.getMonth()];
    const dateName = [
      "th",
      "st",
      "nd",
      "rd",
      "th",
      "th",
      "th",
      "th",
      "th",
      "th",
    ];

    var date =
      time.getDate() + dateName[time.getDate().toString().split("").pop()];

    var year = time.getFullYear();

    var dateArrange = date + " of " + month + ", " + year;

    const timeTag = document.getElementById("time");
    const dateTag = document.getElementById("date");
    timeTag.innerHTML = timeArrange;
    dateTag.innerHTML = dateArrange;
  }
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Dashboard" />
          <div className="row">
            <div className="col">
              <div className="row widget-1 w-100">
                <div className="col">
                  <Graph data={{ name: "Orders", stat: [12, 6] }} />
                </div>
                <div className="col mt-5 text-center">
                  <h5>Pending</h5>
                  <h1 className="stat-number">12</h1>
                  <h5>Complete</h5>
                  <h1 className="stat-number">06</h1>
                </div>
              </div>
              <div className="row widget-1 w-100">
                <div className="col mt-5 text-center">
                  <h5>Pending</h5>
                  <h1 className="stat-number">06</h1>
                  <h5>Complete</h5>
                  <h1 className="stat-number">02</h1>
                </div>
                <div className="col">
                  <Graph data={{ name: "Deliveries", stat: [6, 2] }} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row widget-2 text-end">
                <h1 id="time" style={{ fontWeight: "400" }}></h1>
                <h3 id="date" style={{ fontWeight: "400" }}></h3>
              </div>
              <div className="row widget-3">
                <div className="p-3 ps-4">
                  <h4 className="text-green">Today Deliveries</h4>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-3">
                        <p> 10:30 AM</p>
                      </div>
                      <div className="col-6">
                        <p>519/C, Aggona, Mulleriyawa</p>
                      </div>
                      <div className="col-3">
                        <p>Pending</p>
                      </div>
                      <hr style={{ border: "dotted  1px #9CE6B7" }} />
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <p> 10:30 AM</p>
                      </div>
                      <div className="col-6">
                        <p>519/C, Aggona, Mulleriyawa</p>
                      </div>
                      <div className="col-3">
                        <p>Pending</p>
                      </div>
                      <hr style={{ border: "dotted  1px #9CE6B7" }} />
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p> 10:30 AM</p>
                      </div>
                      <div className="col-6">
                        <p>519/C, Aggona, Mulleriyawa</p>
                      </div>
                      <div className="col-3">
                        <p>Pending</p>
                      </div>
                      <hr style={{ border: "dotted  1px #9CE6B7" }} />
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p> 10:30 AM</p>
                      </div>
                      <div className="col-6">
                        <p>519/C, Aggona, Mulleriyawa</p>
                      </div>
                      <div className="col-3">
                        <p>Pending</p>
                      </div>
                      <hr style={{ border: "dotted  1px #9CE6B7" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
