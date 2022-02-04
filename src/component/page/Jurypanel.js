import React from 'react';
import JuryData from './JuryData';

const Jurypanel = () => {
    return(
        <>
            <section className='jury_panel' id='jury_panel'>
                <div className='container-fluid'>
                    <div className='row'>
                        <h2>Jury Panel</h2>
                        {
                            JuryData.map((items) => {
                                const {pic,name,content} = items;
                                return (
                                    <div class="col-md-3 menu-item filter-starters">                           
                                        <img src={pic}  alt="jury pic" />
                                        <div class="textbox">
                                            <h4> {name} </h4>
                                            <p> {content} </p>
                                        </div>
                                        <div class="jury-name">{name}</div>                          
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
export default Jurypanel