import React, {  useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Details.css'

export default function Details(props) {

    //POD KOMENTAROM SAM OSTAVIO KODOVE KOJI SU BILI NALIK KAO NA SLICI,
    //ALI POSTO MI NIJE USPELO DA URADIM SVE KAKO JE ZADATO, ODLUCIO SAM DA MALO PROMENIM
    //RADI BOLJE FUNKCIONALNOSTI :)

    //METODE ZA PROMENU DUGMICA
    // const func1 = () => {
    //     document.querySelector('#btn1').style.display = 'none'
    //     document.querySelector('#btn2').style.display = 'block';
    // }
    // const func2 = () => {
    //     document.querySelector('#btn1').style.display = 'block'
    //     document.querySelector('#btn2').style.display = 'none';
    // }


    const { id } = useParams()
    const history = useHistory()

    const [singleCoin] = useState(props.crypto.filter(el => el.symbol === id)[0])
    const { loggedIn } = React.useContext(UserContext)
    console.log(loggedIn);

    const addFacorites = () => {
        props.favoriteCoin(singleCoin)
        history.push('/favorites')
        //func1()
    }

    //BIVSA FUNKCIJA ZA BRISANJE IZ FAVORITES    

    // const onRemove = () => {
    //     props.remove(singleCoin.symbol)
    //     //history.push('/favorites')
    //     func2()
        
    // }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <table className='table'>
                        <thead className='table-dark text-center'>
                            <tr>
                                <th>Name</th>
                                <th>Last Price</th>
                                <th>High</th>
                                <th>Low</th>
                                <th>
                                {loggedIn ?
                                        <>
                                        Action
                                        </>
                                        : null}
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td>{singleCoin.symbol}</td>
                                <td>${singleCoin.last_price}</td>
                                <td>${singleCoin.high}</td>
                                <td>${singleCoin.low}</td>
                                <td >
                                    {loggedIn ?
                                        <>
                                            <button id='btn1' onClick={addFacorites} className='btn btn-info text-center'>Add to Favorites</button>
                                        </>
                                        : null}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* BUTTONS KAO NA SLICI */}
                    {/* {loggedIn ? 
                    <>
                        <button id='btn1' onClick={addFacorites} className='btn btn-info'>Add to Favorites</button>
                        <button id='btn2' onClick={onRemove}  className='btn btn-danger'>Remove from Favorites</button>
                    </>
                    : null} */}

                </div>
            </div>
        </div>
    )
}
