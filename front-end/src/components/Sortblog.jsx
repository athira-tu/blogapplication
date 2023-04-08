import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useLocation, useParams } from 'react-router-dom';
import { sortblog } from './api';
import './card.css'
import Navbar from './Navbar';


function Sortblog() {

    // const location = useLocation()
    const { category } = useParams()

    const [sortblogs, setsortblog] = useState([])

    async function getcategoryBlog() {
        console.log(location.state);
        let response = await axios.get(sortblog + category)
        // console.log(response);
        setsortblog(response.data.set)
    }
    useEffect(() => {
        getcategoryBlog()

        // console.log(sortblogs);
    }, [category])





    return (
        <>
            <Navbar />

            <div className='catmain'>

                {
                    sortblogs && sortblogs.map((c) => {
                        console.log(c);
                        return (
                            // <div className='card'>
                            //     <h1>{c.category}</h1>
                            // </div>

                            <div>
                                <div className='allcard'>
                                    <div className='cardhead'>
                                        <h2 className='all'>{c.title}</h2>
                                    </div>
                                    <h3>{c.description}</h3>
                                    <h3>{c.category}</h3>
                                    <h6>{c.authorname}</h6>




                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </>
    )
}






export default Sortblog