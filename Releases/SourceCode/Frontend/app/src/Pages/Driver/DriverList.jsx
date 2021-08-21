import React, { Component } from "react";
import "./DriverList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";

export default class DriverList extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Drivers" />
          <div className="DriverRow">
            <button type="submit" className="Driver-Button-List-Add">
              <FontAwesomeIcon icon={faPlus} /> Add Driver
            </button>
            <button type="reset" className="Driver-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  driverList">
              <tr class="driverListItems">
                <th className="ps-4">License No</th>
                <th className="ps-4">Name</th>
                <th className="ps-4">Address</th>
                <th className="ps-4">Vehicle No</th>
                <th className="ps-4">Vehicle Type</th>
                <th className="ps-4">Phone No</th>
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
