import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () =>{

     const [allInfo , setAllInfo] = useState([]);

       useEffect( () =>{
         axios.post("http://localhost:8000/signup")
         .then( (res) =>{
            console.log(res.data);
            setAllInfo(res.data);
         })
       } , []) ;

    return ( 
        <>
         <div className="container p-5 m-5 text-center">
            <div className="row mb-5">
                <div className="col-7">
                    <img src='./images/signup.png' alt='Signup'/>
                </div>
                <div className="col-5">
                    <h1>Signup now {allInfo}</h1>
                    <p className='text-muted fs--2 mt-4'>Or track your existing application.</p>
                     <fieldset>
                        <legend>Mobile Number</legend>
                        <input type='tel' name='phone' pattern='[0-9]{10}'/>
                     </fieldset>


                    {/* <label forname= "phone" className='text-muted'>Mobile Number</label>
                    <input type='tel' name='phone' pattern='[0-9]{10}'/> */}

                    <p className='text-muted mt-5 mb-5'>You will receive an OTP on your number</p>
                    <button type='submit'className="btn btn-primary mb-4">Continue</button><br></br>
                    {/* <a to='#' style={{textDecoration:"none" , fontSize:"-10"}}>Want to open an NRI account</a> */}
                   
                </div>
            </div>
            <div className='text-muted'>
            <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit <Link to=''> this article </Link>  to know more.
            </p>
            <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help,<Link to=''>click here</Link> .</p>
            </div>
         </div>
        </>
     );
}

export default Signup;