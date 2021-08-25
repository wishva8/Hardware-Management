import React from "react";
import "./Header.css";
import DriverList from "../../Pages/Driver/DriverList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <div className="header">
      <div className="row">
        <div className="col">
          <h5 className="ms-4 mt-1 text-green">{props.topic ?? ""}</h5>
        </div>
        <div className="col d-flex justify-content-end">
        {/* <div className="SearchIcon">
          <div className="row">
            <div className="col-10">
            <input type="text" value={props.inputValue} className="form-control SearchBar"/>

            </div>
            <div className="col-1">
               <label htmlFor="search" >
            <FontAwesomeIcon icon={faSearch}  size="2x"/>
          </label>
            </div>
          </div> */}
         
          {/* </div> */}

          {/* <div class="input-group">
            <input class="form-control border-end-0 border rounded-pill" type="text" value="search" id="example-search-input"/>
            <span class="input-group-append">
                <button class="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </span>
     </div> */}

{/* <input type="text" placeholder="&#xF002;"  style={FontAwesome }/> */}

{/* <div class="row no-gutters">
     <div class="col">
          <input class="form-control border-secondary border-right-0 rounded-0" type="search" value="search" id="example-search-input4"/>
     </div>
     <div class="col-auto">
          <button class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" type="button">
          <FontAwesomeIcon icon={faSearch}/>
          </button>
     </div>
</div> */}
          <div className="dropdown me-4">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>Savvy</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              {/* <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li> */}
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
