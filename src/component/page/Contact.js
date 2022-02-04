import React, {useState} from 'react';

const Contact = () => {
    const allFields = {
        name:'',
        email:'',
        phone:'',
        msg:''
    }
    const[fields, setFields] = useState(allFields);
    function formHandler(event){
        const{name,value} = event.target;
        setFields(prevField => {
            return {
                ...prevField,
                [name]:value
            }
        })

    }
    return(
        <>
            <section className='contact_us' id='contact_us'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>Contact Form {JSON.stringify(fields)}</h2>
                            <form action="" method="post">
                                <input type="text" name="name" onChange={formHandler} value={fields.name} placeholder="Name" />
                                <input type="email" name="email" onChange={formHandler} value={fields.email}  placeholder="Email" />
                                <input type="text" name="phone" onChange={formHandler} value={fields.phone}  placeholder="Phone" />
                                <textarea name="msg" onChange={formHandler} value={fields.msg}  placeholder='Message' ></textarea>
                                <input type="submit" name='submit' value="Submit"  />
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <div className='footer-map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28045.67435212324!2d77.20405889280556!3d28.51839282760682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s104%2C%20DLF%20South%20Court%2C%20Saket%2C%20New%20Delhi%20-%20110017!5e0!3m2!1sen!2sin!4v1643716201769!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contact