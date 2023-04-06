import React from 'react'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
// import Card from './card';
import { UserContext } from './context/UserContext';
import { authorblog } from './api';
import Authorcard from './Authorcard';
import './viewauthorblog.css'
import Navbar from './Navbar';
// import { useNavigation } from 'react-router-dom';


// const navigate = useNavigation()
function ViewAuthorblog() {
    const [allblog, setallblog] = useState()
    const { loggedinuser } = useContext(UserContext)
    // function add() {
    //     navigate('/addblog')
    // }

    async function fetchallblog() {
        let res = await axios.get(authorblog + loggedinuser._id)
        setallblog(res.data.blogs)
        console.log(res);
        // setalltask(t)
    }
    useEffect(() => { fetchallblog() }, [loggedinuser])
    return (

        <>
            <Navbar />
            <div className='main'>

                <div className='authorcontainer' >

                    {allblog && allblog.map((blog) => {
                        return (
                            <div>
                                {/* <button onClick={add}>Add-blog</button> */}
                                <div>
                                    <Authorcard blogmap={blog} />
                                </div>


                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default ViewAuthorblog