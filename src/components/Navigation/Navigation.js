import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../App'

export default function Navigation() {

    const { loggedIn, setLoggedIn } = React.useContext(UserContext)

    const handleLogin = () => {
        setLoggedIn(true)
        localStorage.setItem("Logged", JSON.stringify({ Logged: true }))
    }

    return (
        <div className="container">
            <div className="col-10 offset-1">
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                      {
                        loggedIn ?
                            [
                                <ul key='ul1' className='navbar-nav navbar-brand'>
                                    <NavLink key='1' to='/' exact className=' nav-link'>Home</NavLink>
                                    <NavLink key='2' to='/favorites' className=' nav-link'>Favorites</NavLink>
                                </ul>
                            ] :
                            [   <ul key='ul2' className='navbar-nav navbar-brand'>
                                    <NavLink key='1' to='/' exact className=' nav-link'>Home</NavLink>
                                    
                                </ul>,
                                <button key='2' onClick={handleLogin} className='ms-auto mt-4 mb-4 btn btn-info'>LogIn</button>
                            ]
                    }
                </nav>
            </div>
        </div>

    )
}
