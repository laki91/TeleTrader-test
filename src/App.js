import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CryptoTable from './components/CryptoTable/CryptoTable'
import Details from './components/Details/Details'
import Favorites from './components/Favorites/Favorites'
import Navigation from './components/Navigation/Navigation'
import cryptoArr from './data'

export const UserContext = createContext()

export default function App() {

  const [crypto, setCrypto] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [favor, setFavor] = useState([])

  useEffect(() => {
    console.log('rendering..');
    setCrypto(cryptoArr)
    const storedData = JSON.parse(localStorage.getItem("Logged"));
    if (storedData?.Logged) {
      setLoggedIn(true)
    }
    let data = []
    if(localStorage.data){
      data = JSON.parse(localStorage.data)
    }
    setFavor(data)
    
  }, [loggedIn])

  const favoriteCoin = (id) => {
    localStorage.data = JSON.stringify([...favor, id])
    setFavor([...favor, id])
  }

  //METODA KOJA JE PRVOBITNO RADJENA ZA BRISANJE IZ FAVORITES
  //const remove = (id) => {
    // const del = favor.filter(el => {
    //   return el.symbol !== id
    // })
    // localStorage.data = JSON.stringify(del)
    // setFavor(del)
  //   console.log(id);
  // }

  const deleteCoin = (id) => {
    const del = favor.filter(el => {
      return el.symbol !== id
    })
    localStorage.data = JSON.stringify(del)
    setFavor(del)
  }

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Navigation value={{ loggedIn, setLoggedIn }} />
        <Route path='/' exact>
          <CryptoTable crypto={crypto} />
        </Route>
        <Route path='/favorites'>
          <Favorites favor={favor} deleteCoin={deleteCoin}/>
        </Route>
        <Route path='/details/:id'>
          <Details crypto={crypto} favoriteCoin={favoriteCoin}  />
        </Route>
      </BrowserRouter>
    </UserContext.Provider>

  )
}
