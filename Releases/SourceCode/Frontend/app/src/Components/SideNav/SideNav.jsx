import React from "react";
import "./SideNav.css";
import { imagePath } from "../../Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faTruck} from "@fortawesome/free-solid-svg-icons";
import { faDatabase} from "@fortawesome/free-solid-svg-icons";
import { faIdCard} from "@fortawesome/free-solid-svg-icons";

export default function SideNav() {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 sidebar">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <div className="d-flex justify-content-center">
            <img src={imagePath + `logo.png`} alt="" className="logo-sidebar" />
          </div>
          <span className="fs-4"></span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a href="#" className="nav-link mt-2 mb-2 active align-middle">
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
                </div>
                <div className="col-8 text-start mt-2 ">Dashboard</div>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link mt-2 mb-2 text-white" aria-current="page">
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faFileAlt} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Orders</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link mt-2 mb-2 text-white">
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faDatabase} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Inventory</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link mt-2 mb-2 text-white">
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faTruck} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Deliveries</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link mt-2 mb-2 text-white">
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faIdCard} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Drivers</div>
              </div>
            </a>
          </li>
        </ul>
        <hr />
        
      </div>
    </div>
  );
}
