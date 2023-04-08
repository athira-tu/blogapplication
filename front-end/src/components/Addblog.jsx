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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function Addblog() {

    const { loggedinuser } = useContext(UserContext)
    let navigate = useNavigate()
    const titleref = useRef()
    const descriptionref = useRef()


    const [category, setcategory] = useState('');

    const handleChange = (event) => {
        setcategory(event.target.value);
    };



    async function handleaddblog() {


        let blogobj = {
            title: titleref.current.value,
            description: descriptionref.current.value,
            category: category,
            authorid: loggedinuser._id,
            authorname: loggedinuser.name,
            dateposted: new Date()




        }
        let res = await axios.post("http://localhost:7000/addblog", blogobj)

        if (res.data.success == true) {
            navigate('/viewauthorblog')
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
                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label" >category</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={category}
                            label="category"
                            onChange={handleChange}

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="HTML-CSS" >HTML-CSS</MenuItem>
                            <MenuItem value="REACT">REACT</MenuItem>
                            <MenuItem value="MONGODB">MONGODB</MenuItem>
                        </Select>

                    </FormControl>

                </div>

                <Button variant="contained" className='btn' onClick={handleaddblog}>Submit</Button>
            </div>

            <div className='img1'>
                <img src="../images/addblogimage.png" alt="" />
            </div>




        </div>
    )
}

export default Addblog