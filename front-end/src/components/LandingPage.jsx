import React from 'react'
import Navbar from './Navbar'
import Viewblog from './viewblog'
import './landing.css'

function LandingPage() {
    return (
        <div className="maincontainer">
            <Navbar />
            {/* <div className='banner'>
                <img src="https://www.shutterstock.com/image-illustration/template-design-concept-sketch-illustration-260nw-377077327.jpg" alt="" />
            </div> */}
            <div className="contents">

                <Viewblog />
            </div>
        </div>
    )
}

export default LandingPage