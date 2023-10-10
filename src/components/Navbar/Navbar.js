import React, { useEffect } from 'react'
import logo from "../images/logo.png"
import "../Navbar/navbar.css"
import { Link } from 'react-router-dom'



import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
    // Creating a react hook to add a scroll animation....

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

   
    return (
        <div >
            
            <nav className="navbar navbar-expand-lg bg-white navbar-animation">
                <div className="container-fluid"data-aos="fade-down" >
                    <a className="navbar-brand" href="/" >
                        <img src={logo} alt="Bootstrap" width="200" height="40" />
                    </a>

                     <button className="navbar-toggler bg-secondary"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> 

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb- 2 mb-lg-0" data-aos="fade-down">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/product">Product Series</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/adapter">Adapter Series</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/join">Join Now</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Language</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>


    )

}

export default Navbar

