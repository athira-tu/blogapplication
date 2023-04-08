import React from 'react'
import { useContext } from 'react';
// import { deletetask } from '../../API/Api'
import { Link, useNavigate } from 'react-router-dom'
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

        <>
            <div className='allcard'>
                <div className='cardhead'>
                    <h2 className='all'>{blogmap.title}</h2>
                </div>
                <h3>{blogmap.description}<Link to={`/singleblog/${blogmap._id}`}>read more...</Link></h3>
                <h3>{blogmap.category}</h3>
                <h6>{blogmap.authorname}</h6>



            </div >
        </>
    )
}

export default Card