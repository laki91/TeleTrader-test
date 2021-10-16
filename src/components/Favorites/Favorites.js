import React from 'react'
import SingleFavCoin from '../SingleFavCoin/SingleFavCoin';

export default function Favorites(props) {

    const all = props.favor.map(el => {
        return (
            <SingleFavCoin el={el} key={el.symbol} deleteCoin={props.deleteCoin} />
        )
    })



    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <table className='table text-center'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Name</th>
                                <th>Last</th>
                                <th>Change</th>
                                <th>Change Percent</th>
                                <th>High</th>
                                <th>Low</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
