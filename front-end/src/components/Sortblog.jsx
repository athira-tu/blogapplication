import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { sortblog } from './api';


function Sortblog() {

    const location = useLocation()
    const [sortblogs, setsortblog] = useState([])

    async function getcategoryBlog() {
        console.log(location.state);
        let response = await axios.get(sortblog + location.state)
        // console.log(response);
        setsortblog(response.data.set)
    }
    useEffect(() => {
        getcategoryBlog()
        // console.log(sortblogs);
    }, [])






    return (
        <>
            <div className='card'>

                {
                    sortblogs && sortblogs.map((c) => {
                        console.log(c);
                        return (
                            <div>
                                <h1>{c.category}</h1>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )


}
export default Sortblog