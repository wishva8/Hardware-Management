import React, { Component } from "react";
import "./DriverList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";

export default class DriverList extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Drivers" />
          <div className="row">
            <table class="table table-bordered  driverList">
              <tr class="driverListItems">
                <th className="ps-4">Test 1</th>
                <th className="ps-4">Test 2</th>
                <th className="ps-4">Test 3</th>
                <th className="ps-4">Test 4</th>
                <th className="ps-4">Test 5</th>
                <th className="ps-4">Test 6</th>
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
