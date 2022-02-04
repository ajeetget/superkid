import React from 'react';
import logo from '../img/footer-logo.png';

const Footer = () => {
    return(
        <>
            <section className='Footer' id='Footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='footer-inner'>
                            <img src={logo} alt="footer logo" />
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Footer