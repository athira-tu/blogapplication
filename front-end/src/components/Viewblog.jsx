import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';

function Viewblog() {
    const [allblog, setallblog] = useState()

    async function fetchallblog() {
        let res = await axios.get("http://localhost:7000/getallblog")
        setallblog(res.data.allblog)
        console.log(res.data.allblog);
        // setalltask(t)
    }


    useEffect(() => { fetchallblog() }, [])


    return (

        <>
            <p>hai</p>
            {allblog && allblog.map((blog) => {
                return (
                    <Card blogmap={blog} />
                )
            })}

        </>
    )
}


export default Viewblog