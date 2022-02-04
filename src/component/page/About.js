import React from './About';
import aboutpic from '../img/ab.jpg';

const About = () =>{
    return(
        <>
            <section id='about' className='about'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-5'>
                            <img src={aboutpic} alt='about pic' />
                        </div>
                        <div className='col-md-7'>
                            <h2>About Us</h2>
                            <p>Age is no more a bar for talented kids. India’s largest online platform for kids is here. 
                            Haut Monde Super Kids is one of its kind of Talent Hunt Show where kids from 3 years to 
                            14 Years can participate from across the globe, showcasing their talents of Dancing, 
                            Singing, Art, Acting, Mimicry, Storytelling and many more. Haut Monde India is a leading 
                            event management platform, a part of Shri Sai Entertainment Pvt Ltd. Since 2008.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About