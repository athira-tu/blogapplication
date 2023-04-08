import React from 'react'


function Comments({ commentmap }) {


    return (
        <div>

            <h2 className='all'>{commentmap.name}</h2>

            <h3>{commentmap.comment}</h3>
            {/* <h3>{blogmap.category}</h3>
                <h6>{blogmap.authorname}</h6> */}
        </div>
    )
}

export default Comments