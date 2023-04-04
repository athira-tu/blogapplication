import React from 'react'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from './card';
import { UserContext } from './context/UserContext';
import { authorblog } from './api';
import Authorcard from './authorcard';

function ViewAuthorblog() {
    const [allblog, setallblog] = useState()
    const { loggedinuser } = useContext(UserContext)

    async function fetchallblog() {
        let res = await axios.get(authorblog + loggedinuser._id)
        setallblog(res.data.blogs)
        console.log(res);
        // setalltask(t)
    }


    useEffect(() => { fetchallblog() }, [])


    return (

        <>
            <p>hai</p>
            {allblog && allblog.map((blog) => {
                return (
                    <Authorcard blogmap={blog} />
                )
            })}

        </>
    )
}


export default ViewAuthorblog