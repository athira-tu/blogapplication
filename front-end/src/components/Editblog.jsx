import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useContext } from 'react';
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import ViewAuthorblog from './ViewAuthorblog';
import { editblog } from './api';
import Authorcard from './authorcard';

function Editblog() {

    const [newtitle, setnewtitle] = useState({})
    const [newcontent, setnewcontent] = useState({})
    const location = useLocation()
    useEffect(() => {
        setnewtitle(location.state.title)
        setnewcontent(location.state.description)
    }, [])

    async function editData() {
        let newData = {
            title: newtitle,
            description: newcontent
        }
        const response = await axios.patch(editblog + location.state._id, newData)
    }
    return (
        <div>
            <h1>Edit your blog</h1>

            <TextField id="standard-basic" label="taskname" variant="standard" value={newtitle} onChange={(e) => { setnewtitle(e.target.value) }} /><br />
            <TextField id="standard-basic" label="description" variant="standard" row={5} value={newcontent} onChange={(e) => { setnewcontent(e.target.value) }} /><br />
            <Button variant="contained" className='btn' onClick={editData}>Submit</Button>
            {/* <Link to={<ViewAuthorblog />}>     <button>authorblog</button></Link> */}
        </div>
    )
}

export default Editblog