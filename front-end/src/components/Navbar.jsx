import React, { useRef } from 'react'
import "./navbar.css"
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Signout from './Signout'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'
import axios from 'axios'
import { sortblog } from './api'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const { loggedinuser } = useContext(UserContext)

    const navigate = useNavigate()
    const [select, setSelect] = useState("")


    async function sorting(e) {
        setSelect(e.target.value)
        navigate('/sortblog/' + e.target.value)
    }


    return (
        <div className="mainnav">
            <div className="head">
                <h1>BLOG</h1>
            </div>
            <div className="options">
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Resources</a>
                <a href="#">Contact</a>
                <a href="/addblog">Add-blog</a>
                <a href="/signup">signup</a>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" >category</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="category"
                        onChange={sorting}
                        value={select}

                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="HTML-CSS" >HTML-CSS</MenuItem>
                        <MenuItem value="REACT">REACT</MenuItem>
                        <MenuItem value="MONGODB"   >MONGODB</MenuItem>
                    </Select>
                </FormControl>


                {
                    loggedinuser ? <Signout /> : <a href="/login"><button >SignIn</button></a>
                }



            </div>

        </div>
    )
}

export default Navbar