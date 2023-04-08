import React from 'react'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
// import Card from './card';
import { UserContext } from './context/UserContext';
import { authorblog } from './api';
import Authorcard from './Authorcard';
import './viewauthorblog.css'
import Navbar from './Navbar';
import Authorblogcard from './Authorblogcard';
import { useParams } from 'react-router-dom';
import { authblogs } from './api';
// import { useNavigation } from 'react-router-dom';


// const navigate = useNavigation()
function Authorblog() {
    const { authorid } = useParams()
    const [allblog, setallblog] = useState()
    const { loggedinuser } = useContext(UserContext)
    // function add() {
    //     navigate('/addblog')
    // }

    async function fetchallblog() {
        let res = await axios.get(authblogs)
        setallblog(res.data.allblog)
        console.log(res);
        // setalltask(t)
    }
    useEffect(() => { fetchallblog() }, [])
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
                                    <Authorblogcard blogmap={blog} />
                                </div>


                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default Authorblog