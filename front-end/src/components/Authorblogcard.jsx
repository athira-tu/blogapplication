import React from 'react'
// import { deletetask } from '../../API/Api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Deleteblog } from './api'
import './authorcard.css'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditIcon from '@mui/icons-material/Edit';

function Authorblogcard({ blogmap }) {
    const navigate = useNavigate()


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

            </div>
        </>
    )
}

export default Authorblogcard