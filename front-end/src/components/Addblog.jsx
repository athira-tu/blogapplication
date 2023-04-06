import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useContext } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import ViewAuthorblog from './ViewAuthorblog';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './addblog.css'
import Navbar from './Navbar';

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
            navigate('/')
        } else {
            alert("invalid")
        }





    }
    return (
        <div className='outer'>
            <Navbar />
            <div className='addmain'>
                <h1 className='addhead'>Add your blog</h1>
                {/* <p>{loggedinuser.name}</p> */}
                <TextField id="outlined-basic" label="enter your blog" variant="outlined" inputRef={titleref} /><br />
                <TextField id="outlined-basic" label="description" variant="outlined" multiline rows={5} inputRef={descriptionref} /><br />
                <Button variant="contained" className='btn' onClick={handleaddblog}>Submit</Button>
            </div>

            <div className='img1'>
                <img src="../images/addblogimage.png" alt="" />
            </div>




        </div>
    )
}

export default Addblog