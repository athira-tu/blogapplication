import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { useNavigate } from 'react-router-dom'

function Signout() {
    const { setloggedinuser } = useContext(UserContext)
    const navigate = useNavigate()

    async function logout(e) {
        e.preventDefault()
        setloggedinuser(null);
        localStorage.removeItem("loggedinuser");
        navigate("/")
    }
    return (
        <div><button className='login'>
            <a href="" onClick={(e) => { logout(e) }}>Signout</a>
        </button></div>
    )
}

export default Signout