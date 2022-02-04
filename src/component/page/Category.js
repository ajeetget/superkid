import React from 'react';
import Categorydata from './Categorydata';  

const Category = () => {
    return (
        <>
            <section className='category' id='category'>
                <div className='container'>
                    <h2>Categories Offered</h2>
                    <div className='row'>
                       {
                        Categorydata.map( (items) => {
                            const {cpic, ctitle} = items;
                            return(
                                <div className='col-md-3'>
                                    <div className='category-item'>
                                        <div className='category-icon'>
                                            <img src={cpic} title="category pic" />
                                        </div>                                       
                                        <p>{ctitle}</p>
                                    </div>                                  
                                </div>
                            )
                        })
                       }
                    </div>
                </div>

            </section>
        </>
    );
}

export default Category 