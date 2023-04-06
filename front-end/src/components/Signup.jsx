import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signup } from '../assets/api/api';
import { Box } from '@mui/material';





function Signup() {
    // const navigation=useNavigation()
    const nameref = useRef()
    const emailref = useRef()
    const passwordref = useRef()
    const password2ref = useRef()
    const phoneref = useRef()
    const navigate = useNavigate()


    async function handlesignup() {
        if (passwordref.current.value == password2ref.current.value) {
            let userobj = {
                name: nameref.current.value,
                email: emailref.current.value,
                password: passwordref.current.value,
                phonenumber: phoneref.current.value

            }
            let res = await axios.post(signup, userobj)
            // console.log(userobj);
            navigate("/login")

        } else {
            alert("password not same")
        }
    }

    return (
        <>
            <div >
                <div className='signupimg'>
                    <Box id="container" className="card shadow">
                        <div className='sign'>

                            <h1 className='sup'>SignUp</h1>
                            <TextField className="inp" id="standard-basic" label="name" variant="standard" inputRef={nameref} /><br /><br />
                            <TextField id="standard-basic" label="email" variant="standard" inputRef={emailref} /><br /> <br />
                            <TextField id="standard-basic" label="password" variant="standard" inputRef={passwordref} /> <br /> <br />
                            <TextField id="standard-basic" label="confirm password" variant="standard" inputRef={password2ref} /> <br /> <br />
                            <TextField id="standard-basic" label=" phonenumber" variant="standard" inputRef={phoneref} /> <br /> <br />

                            {/* <Button variant="contained" className='btn' onClick={handlesignup}>Submit</Button> */}
                            <Button variant="outlined" className='btn' onClick={handlesignup} >submit</Button>



                        </div>
                    </Box>
                    <div className='imgs'>
                        <img src="..\images\signup-removebg.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Signup