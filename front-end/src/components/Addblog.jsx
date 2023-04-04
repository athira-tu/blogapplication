import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useContext } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import ViewAuthorblog from './ViewAuthorblog';

function Addblog() {

    const { loggedinuser } = useContext(UserContext)
    let navigate = useNavigate()
    const titleref = useRef()
    const descriptionref = useRef()



    async function handleaddblog() {


        let blogobj = {
            title: titleref.current.value,
            description: descriptionref.current.value,
            authorid: loggedinuser._id,
            authorname: loggedinuser.name,
            dateposted: new Date()




        }
        let res = await axios.post("http://localhost:7000/addblog", blogobj)

        if (res.data.success == true) {
            navigate('/viewblog')
        } else {
            alert("invalid")
        }





    }
    return (
        <div>
            <h1>Add your blog</h1>
            <p>{loggedinuser.name}</p>
            <TextField id="standard-basic" label="taskname" variant="standard" inputRef={titleref} /><br />
            <TextField id="standard-basic" label="description" variant="standard" row={5} inputRef={descriptionref} /><br />
            <Button variant="contained" className='btn' onClick={handleaddblog}>Submit</Button>
            <Link to={<ViewAuthorblog />}>     <button>authorblog</button></Link>



        </div>
    )
}

export default Addblog