import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './viewblog.css'

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
            <div className='main'>
                {/* <h1 className='exp'>Explore New Blogs</h1> */}
                <div className='authorcontainer' >
                    {allblog && allblog.map((blog) => {
                        return (
                            <Card blogmap={blog} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}


export default Viewblog