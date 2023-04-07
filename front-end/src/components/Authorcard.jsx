import React from 'react'
// import { deletetask } from '../../API/Api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Deleteblog } from './api'
import './authorcard.css'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditIcon from '@mui/icons-material/Edit';

function Authorcard({ blogmap }) {
    const navigate = useNavigate()

    async function del() {
        console.log(blogmap);
        await axios.delete(Deleteblog + blogmap._id)
        window.location.replace("http://localhost:5173/viewauthorblog")
    }
    async function blogedit() {
        navigate('/editblog', { state: blogmap })
    }
    console.log(blogmap);
    return (
        <>
            <div className='authorcard'>
                <div className='acardhead'>
                    <h2 className='auth'>{blogmap.title}</h2>
                </div>
                <h3>{blogmap.description}</h3>
                <h3>{blogmap.category}</h3>

                <hr />
                <div className='auttons'>


                    {/* <button onClick={del}>delete1</button> */}
                    <DeleteSharpIcon onClick={del} />
                    <EditIcon onClick={blogedit} />
                    {/* <button onClick={blogedit}>edit</button> */}

                </div>
            </div>
        </>
    )
}

export default Authorcard