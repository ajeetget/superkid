import React, {useState} from 'react';
import rlogo from '../img/footer-logo.png';

const Registration  = () => {
    const formvalue = {
        name:'',
        email:'',
        phone:'',
        age:'',
        category:'',
        school_name:'',
        father_name:'',
        student_class:''

    }
    const [data, setData] = useState(formvalue);

    function formhandler(event){
        console.log(event.targer);
        const {name,value} = event.target;
        setData(prevdata => {
            return{
                ...prevdata,
                [name]:value
            }
        });
       
    }
    return(
        <>
            <section className='registration' id='registration'>
                <div className='container'>
                    <div className='row'>                      
                        <div className='col-md-7'>
                            <h2>Registration Form {JSON.stringify(data)}</h2>
                            <form action='' method='post'>
                                <input type="text" name="name" onChange={formhandler} value={data.name} placeholder='Name' />
                                <input type="email" name="email" onChange={formhandler} value={data.email}  placeholder='Email' />
                                <input type="text" name="phone" onChange={formhandler} value={data.phone}  placeholder='Phone' />
                                <input type="text" name="age" onChange={formhandler} value={data.age}  placeholder='Age' />
                                <select name="category"  onChange={formhandler} value={data.category}  >
                                    <option value="">Select Category </option>
                                    <option value="Dance">Dance </option>
                                    <option value="Music">Music (Instruments, Singing)</option>
                                    <option value="Acting">Acting</option>
                                    <option value="Fine Arts">Fine Arts </option>
                                    <option value="Mimicry">Mimicry</option>
                                    <option value="Stand-up Comedy">Stand-up Comedy </option> 
                                    <option value="Story Telling">Story Telling </option>
                                    <option value="Special Talent">Special Talent</option>
                                </select>
                                <input type="text" name="school_name" onChange={formhandler} value={data.school_name}  placeholder='School Name'  />
                                <input type="text" name="father_name" onChange={formhandler} value={data.father_name}  placeholder='Father Name' />
                                <input type="text" name="student_class" onChange={formhandler} value={data.student_class}  placeholder='Class' /> 
                                <input type="submit" name="submit"value="Submit" />                                
                            </form>
                        </div>
                        <div className='col-md-5'>
                            <div className='registration-right'>
                                <img src={rlogo} alt="registration-logo" />
                                <h4>The stage is ready, Are you?</h4>
                                <p>
                                    <span>Online registration open for 2022 Apply Now!</span>
                                    <br /> Registration Fee – INR 999.00 to register <br/> fill the application form.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registration