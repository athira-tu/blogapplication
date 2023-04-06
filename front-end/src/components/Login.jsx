import React, { useRef, useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import './login.css'
import Navbar from './Navbar';
// import { response } from 'express';


function Login() {
    const { setloggedinuser } = useContext(UserContext)

    const emailref = useRef()
    const passwordref = useRef()
    const navigate = useNavigate()
    async function handlelogin() {
        let userobj = {
            email: emailref.current.value,
            password: passwordref.current.value

        }
        const res = await axios.post("http://localhost:7000/login", userobj)
        console.log(userobj);
        if (res.data.success == true) {
            setloggedinuser(res.data.user)
            window.localStorage.setItem("loggedinuser", JSON.stringify(res.data.user))
            navigate("/viewauthorblog")

        } else {
            alert("invalid")
        }

    }
    return (
        <>
            <Navbar />
            <div className='loginouter'>

                <div className="card shadow" >
                    <h1 className='loginhead'>Login</h1>
                    <div className='content'>
                        <TextField id="outlined-basic" label="email" variant="outlined" type="email" inputRef={emailref} /><br />
                        <TextField id="outlined-basic" label=" password" variant="outlined" type="password" inputRef={passwordref} /><br />
                        <Button variant="contained" onClick={handlelogin}>Submit</Button>
                        <p>if you don't have account? <a href="/signup">signup</a></p>
                    </div>
                </div>
                {/* <div className='imgs'>
                    <img src="..\images\signup-removebg.png" alt="" />
                </div> */}
            </div>
        </>
    )
}

export default Login