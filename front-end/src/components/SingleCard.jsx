import React, { useEffect } from 'react'
import { postcomment, singleblog, theblogcomments } from './api'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { useRef } from 'react'
import Comments from './comments'

function SingleCard() {
    const { id } = useParams()
    const [oneblog, setoneblog] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    const { loggedinuser } = useContext(UserContext)





    // const [comment, setcomment] = useState({});





    async function showoneblog() {
        const response = await axios.get(singleblog + id)
        // console.log(response);
        setoneblog(response.data.blog)

    }
    const [refresh, setRefresh] = useState()
    useEffect(() => {
        showoneblog()
    }, [id])

    const commentref = useRef()

    async function addcomment() {
        if (loggedinuser) {
            let commentobj = {
                authorname: loggedinuser.name,
                comment: commentref.current.value,

                authorid: loggedinuser._id,
                blogid: id,

                dateposted: new Date()
            }
            let response = await axios.post(postcomment, commentobj)
            setRefresh(!refresh)
            commentref.current.value = ''
            console.log(response);

            console.log(commentobj);
        } else {
            navigate('/login')
        }
    }
    const [blogcomment, setblogcomment] = useState()

    async function fetchallcomment() {
        let res = await axios.get(theblogcomments + id)

        console.log(res);
        setblogcomment(res.data.blogcomment)

    }
    useEffect(() => { fetchallcomment() }, [refresh])

    return (
        <>
            <h1>{oneblog.title}</h1>
            <textarea name="" id="" cols="30" rows="10" placeholder='comments' ref={commentref}></textarea>
            <button onClick={addcomment}>post</button>

            <div>
                {blogcomment && blogcomment.map((com) => {
                    return (
                        <Comments commentmap={com} />
                    )
                })}
            </div>
        </>
    )
}

export default SingleCard