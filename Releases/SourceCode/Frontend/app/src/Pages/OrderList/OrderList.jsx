import React, { Component } from 'react'
import "./OrderList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";




export default class OrderList extends Component {
    render() {
        return (
            <table class="table table-bordered order">
                <tr class="orderListItems">
                    <th className = "ps-4">Test 1</th>
                    <th className = "ps-4">Test 2</th>
                    <th className = "ps-4">Test 3</th>
                    <th className = "ps-4">Test 4</th>
                    <th className = "ps-4">Test 5</th>
                    <th className = "ps-4">Test 6</th>
                    <th className = "ps-4" colSpan='2'></th>


                </tr>
                <tr class = "orderListItems text-white">
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4"><FontAwesomeIcon size="2x" icon={faEdit}/></td>
                    <td className = "ps-4"><FontAwesomeIcon size="2x" icon={faTrash}/></td>
                </tr>
                <tr class = "orderListItems text-white">
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4"><FontAwesomeIcon size="2x" icon={faEdit}/></td>
                    <td className = "ps-4"><FontAwesomeIcon size="2x" icon={faTrash}/></td>
                </tr>
                <tr class = "orderListItems text-white">
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4">Test</td>
                    <td className = "ps-4"><FontAwesomeIcon size="2x" icon={faEdit}/></td>
                    <td className = "ps-4"><FontAwesomeIcon size="2x" icon={faTrash}/></td>
                </tr>
            </table>
        )
    }
}
