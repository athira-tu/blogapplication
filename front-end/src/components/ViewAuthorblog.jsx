import React from 'react'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
// import Card from './card';
import { UserContext } from './context/UserContext';
import { authorblog } from './api';
import Authorcard from './Authorcard';
import './viewauthorblog.css'

function ViewAuthorblog() {
    const [allblog, setallblog] = useState()
    const { loggedinuser } = useContext(UserContext)

    async function fetchallblog() {
        let res = await axios.get(authorblog + loggedinuser._id)
        setallblog(res.data.blogs)
        console.log(res);
        // setalltask(t)
    }
    useEffect(() => { fetchallblog() }, [loggedinuser])
    return (

        <>
            <div className='main'>
                <div className='authorcontainer' >
                    {allblog && allblog.map((blog) => {
                        return (
                            <div>
                                <Authorcard blogmap={blog} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default ViewAuthorblog