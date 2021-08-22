import React, { Component } from "react";
import "./InventoryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";

export default class InventoryList extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Inventory Management" />
          <div className="ItemRow text-end">
            <button type="submit" className="Item-Button-Add">
              <FontAwesomeIcon icon={faPlus} /> Add Item
            </button>
            <button type="submit" className="Item-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  Inventory">
              <tr class="InventoryListItems">
                <th className="ps-4">Item No.</th>
                <th className="ps-4">Description</th>
                <th className="ps-4">Item Category</th>
                <th className="ps-4">Unit Price</th>
                <th className="ps-4">Inventory No.</th>
                <th className="ps-4">Quantity</th>
                <th className="ps-4"></th>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
                <td className="ps-4">
                  <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </td>
              </tr>
              <tr class="InventoryListItems text-white">
                <td className="ps-4">ITM001</td>
                <td className="ps-4">Wires</td>
                <td className="ps-4">Electrical</td>
                <td className="ps-4">4000</td>
                <td className="ps-4">INV1</td>
                <td className="ps-4">40</td>
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
