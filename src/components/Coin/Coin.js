import React from 'react'
import { Link } from 'react-router-dom'
import './Coin.css'

export default function Coin({el}) {

    return (
        <>
            <tr>
                <td id='name'><strong><Link to={'/details/'+ el.symbol} >{el.symbol}</Link></strong></td>
                <td>${el.last_price}</td>
                <td>${el.change}</td>
                <td >{el.change_percent}%</td>
                <td>${el.high}</td>
                <td>${el.low}</td>
            </tr>
        </>
    )
}
