import React from 'react';
import Navbar from '../include/Navbar';
import Homeslider from '../include/Homeslider';
import About from './About';
import Category from './Category';
import Jurypanel from './Jurypanel';
import Registration from './Registration';
import Previousshow from './Previousshow';
import Contact from './Contact';
import Footer from './Footer';
const Home = () => {
    return(
        <>
        <Navbar />
        <Homeslider />  
        <About /> 
        <Category /> 
        <Jurypanel />  
        <Registration /> 
        <Previousshow /> 
        <Contact />  
        <Footer />   
        </>
    );
}

export default Home