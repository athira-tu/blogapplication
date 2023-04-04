import React from 'react'
import { useContext } from 'react';
// import { deletetask } from '../../API/Api'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import './card.css'
// import axios from 'axios'

function Card({ blogmap }) {

    const navigate = useNavigate()
    // async function del() {
    //     await axios.delete(deletetask + task._id)
    //     window.location.replace("http://localhost:5173/viewblog")
    // }
    return (
        <div className='box'>
            <h2>{blogmap.title}</h2>
            <h3>{blogmap.description}</h3>
            <h6>{blogmap.authorname}</h6>


            <p></p>

            {/* <button onClick={del}>delete</button> */}
        </div>
    )
}

export default Card