import React from 'react'
import "./navbar.css"
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Signout from './Signout'

function Navbar() {
    const { loggedinuser } = useContext(UserContext)
    return (
        <div className="mainnav">
            <div className="head">
                <h1>BLOG</h1>
            </div>
            <div className="options">
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Resources</a>
                <a href="#">Contact</a>
                <a href="/addblog">Add-blog</a>
                <a href="/signup">signup</a>
                {
                    loggedinuser ? <Signout /> : <a href="/login"><button >SignIn</button></a>
                }



            </div>

        </div>
    )
}

export default Navbar