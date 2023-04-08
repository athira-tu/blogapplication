import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useContext } from 'react';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import ViewAuthorblog from './ViewAuthorblog';
import { editblog } from './api';
import Authorcard from './Authorcard';
import './edit.css'
import Navbar from './Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { Link, useNavigate } from 'react-router-dom'

function Editblog() {

    const [newtitle, setnewtitle] = useState({})
    const [newcontent, setnewcontent] = useState({})
    const [newcategory, setnewcategory] = useState({})
    const location = useLocation()
    let navigate = useNavigate()
    useEffect(() => {
        setnewtitle(location.state.title)
        setnewcontent(location.state.description)
        setnewcategory(location.state.category)
    }, [])

    async function editData() {
        let newData = {
            title: newtitle,
            description: newcontent,
            category: newcategory
        }
        const response = await axios.patch(editblog + location.state._id, newData)
        navigate('/viewauthorblog')
    }
    return (
        <>
            <Navbar />
            <div className='editouter'>
                <div className='editimg'>
                    <img src="../images/editimage.png" alt="" />
                </div>
                <div className='editmain'>
                    <h1>Edit your blog</h1>

                    <TextField id="standard-basic" label="taskname" variant="standard" value={newtitle} onChange={(e) => { setnewtitle(e.target.value) }} /><br />
                    <TextField id="standard-basic" label="description" variant="standard" row={5} value={newcontent} onChange={(e) => { setnewcontent(e.target.value) }} /><br />

                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label" >category</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={newcategory}
                                label="category"
                                onChange={(e) => { setnewcategory(e.target.value) }}

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

                    <Button variant="contained" className='btn' onClick={editData}>Submit</Button>
                    {/* <Link to={<ViewAuthorblog />}>     <button>authorblog</button></Link> */}
                </div>
            </div>
        </>
    )
}

export default Editblog