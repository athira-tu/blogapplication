import React from 'react'
// import { deletetask } from '../../API/Api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Deleteblog } from './api'

function Authorcard({ blogmap }) {
    const navigate = useNavigate()
    async function del() {
        await axios.delete(Deleteblog + blogmap._id)
        window.location.replace("http://localhost:5173/viewauthorblog")
    }
    return (
        <>
            <div>
                <h2>{blogmap.title}</h2>
                <h3>{blogmap.description}</h3>
                <button onClick={del}>delete</button>
            </div>
        </>
    )
}

export default Authorcard