import React from 'react';
import logo from '../img/footer-logo.png';


const Navbar = () => {
    return(
        <>
           <section id="header" className="header">
                <nav className="navbar  fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src= {logo} alt='logo' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#video_wrapper">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#category">Category</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#jury_panel">Jury Panel</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#registration ">Registration </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#Previousshow">Previous Shows</a>
                            </li>                           
                            <li className="nav-item">
                            <a className="nav-link" href="#contact_us">contact us</a>
                            </li>
                           
                        </ul>                       
                        </div>
                    </div>
                </nav>
           </section>
        </>
    );
}

export default Navbar