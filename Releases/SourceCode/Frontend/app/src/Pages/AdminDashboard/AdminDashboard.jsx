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
      var am = "PM";
    }
    if (h > 12) {
      h = h - 12;
      var am = "PM";
    }
    if (s < 9) {
      s = "0" + s;
    }
    var timeArrange = h + ":" + m + ":" + s + " " + am;
    // alert(timeArrange)
    // const timeTag = document.getElementById("time");
    // timeTag.value = timeArrange;
    // console.log(timeTag);
    const timeTag = document.getElementById("time");
    timeTag.innerHTML = timeArrange;
    // this.setState({ time: timeArrange });
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
                  <h5>Compelte</h5>
                  <h1 className="stat-number">06</h1>
                </div>
              </div>
              <div className="row widget-1 w-100">
                <div className="col mt-5 text-center">
                  <h5>Pending</h5>
                  <h1 className="stat-number">06</h1>
                  <h5>Compelte</h5>
                  <h1 className="stat-number">02</h1>
                </div>
                <div className="col">
                  <Graph data={{ name: "Deliveries", stat: [6, 2] }} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row widget-2 text-end">
                <h2 id="time">{this.state.time ?? ""}</h2>
              </div>
              <div className="row widget-3">sdfsfsdfgs</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
