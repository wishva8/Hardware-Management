import React, { Component } from "react";
import "./InventoryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { inventoryURL } from "../../Services/endpoints";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default class InventoryList extends Component {
  state = {
    itemNo: "",
    itemCategory: "",
    description: "",
    unitPrice: 0,
    inventoryNo: "",
    quantity: 0,
    items: [],
    redirect: false,
  };

  async componentDidMount() {
    const items = await axios.get(inventoryURL).then((result) => {
      this.setState({
        items: result.data,
      });
      //console.log(result.data);
    });
  }

  delete(inventoryNo) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          axios
            .delete(
              "http://localhost:9091/inventory/deleteDeliveryById/" +
                inventoryNo
            )
            .then(() => {
              this.componentDidMount();
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your item record is safe :)",
            "error"
          );
        }
      });
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createItem" />;
    }
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Inventory Management" />
          <div className="ItemRow text-end">
            {this.renderRedirect()}
            <button
              type="submit"
              className="Item-Button-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Item
            </button>
            <button type="submit" className="Item-Button-Report">
              <FontAwesomeIcon icon={faDownload} /> Report
            </button>
          </div>
          <div className="row">
            <table className="table table-bordered  Inventory">
              <tr className="InventoryListItems">
                <th className="ps-4">Item No.</th>
                <th className="ps-4">Description</th>
                <th className="ps-4">Item Category</th>
                <th className="ps-4">Unit Price</th>
                <th className="ps-4">Quantity</th>
                <th className="ps-4"></th>
              </tr>
              {items.map((item) => {
                return (
                  <tr
                    key={item.itemNo}
                    className="InventoryListItems text-white"
                  >
                    <td className="ps-4">{item.itemNo}</td>
                    <td className="ps-4">{item.description}</td>
                    <td className="ps-4">{item.itemCategory}</td>
                    <td className="ps-4">{item.unitPrice}</td>
                    <td className="ps-4">{item.quantity}</td>
                    <td className="ps-4">
                      <FontAwesomeIcon size="2x" icon={faEdit} />{" "}
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(item.inventoryNo)}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
