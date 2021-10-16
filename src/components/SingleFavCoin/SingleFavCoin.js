import React from 'react'
import { Link } from 'react-router-dom'
import '../Coin/Coin.css'

export default function SingleFavCoin({el, deleteCoin}) {

    return (
        <>
            <tr key={el.symbol}>
                <td id='name'><strong><Link to={'/details/'+ el.symbol}>{el.symbol}</Link></strong></td>
                <td>${el.last_price}</td>
                <td>${el.change}</td>
                <td>{el.change_percent}%</td>
                <td>${el.high}</td>
                <td>${el.low}</td>
                <td><button onClick={()=>{deleteCoin(el.symbol)}} className='btn btn-danger text-center'>Remove from Favorites</button></td>
            </tr>
        </>
    )
}
