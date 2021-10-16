import React from 'react'
import Coin from '../Coin/Coin';


export default function CryptoTable({crypto}) {

    const all = crypto.map(el => {
        return (
            <Coin el={el} key={el.symbol} />
        )
    })


    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <table className='table '>
                        <thead className='table-dark text-center'>
                            <tr>
                                <th>Name</th>
                                <th>Last</th>
                                <th>Change</th>
                                <th>Change Percent</th>
                                <th>High</th>
                                <th>Low</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {all}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
