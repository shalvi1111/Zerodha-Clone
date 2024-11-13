// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer } from "react-toastify";

// const Signup = () => {
//   // const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });
//   const { email, password, username } = inputValue;
//   const handleOnChange = (e) => {
//     const { name , value} = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };
  
//   const handleSubmit = async (e) => {
//    e.preventDefault();
//     try {
//       await axios.post('/api/user', inputValue); // Sends formData to your endpoint
//       alert("Data submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting data:", error);
//     }
//   };
//   // const handleError = (err) =>
//   //   toast.error(err, {
//   //     position: "bottom-left",
//   //   });
//   // const handleSuccess = (msg) =>
//   //   toast.success(msg, {
//   //     position: "bottom-right",
//   //   });



  
//   return (
//     <div className="form_container p-5 m-5 text-center">
//       <img src="./logo.png" alt="Logo" style={{width : "10%"}}/>
//       <h2 className="p-2 m-4" >Signup Account</h2>
//       <form onSubmit={handleSubmit} >
//         <div className="p-2 m-2">
//           <label htmlFor="email">Email : &nbsp;</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//             style={{width:"50%"}}
//           />
//         </div>
//         <div className="p-2 m-2"> 
//           <label htmlFor="email">Username : &nbsp;</label>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             placeholder="Enter your username"
//             onChange={handleOnChange}
//             style={{width:"50%"}}
//           />
//         </div>
//         <div className="p-2 m-2">
//           <label htmlFor="password">Password : &nbsp;</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//             style={{width:"50%"}}
//           />
//         </div>
//         <button className="p-2 m-4 fs-5" type="submit" style={{backgroundColor : "orangered", color:"white" , width:"40%"}} >Submit</button>
//         <br></br>
//         <span>
//           Already have an account? <Link to={"/login"}>Login</Link>
//         </span>
//        </form>
//       <ToastContainer />
//     </div>
//   );
// };



// //    // Building my own signup page
//   //  return (
      
//   //     <div className="form-container p-5 m-5 text-center" >
//   //       <h2 className='fs-2  m-2' style={{color:"#4184f3"}}><i>Signup Account for Zerodha {allInfo}</i></h2>
//   //       <form className='p-2 m-2'>
//   //          <div className="row text-center p-5 m-2">

//   //           <div className="col-8 m-4">
//   //           <label><b>Username :</b></label> &nbsp;  &nbsp; 
//   //           <input type='text' placeholder='Enter your username' style={{width :"70%" , borderRadius:"2%"}}></input>
//   //           </div>
            
//   //           <div className="col-8 m-4">
//   //           <label ><b>Email :</b></label>  &nbsp;  &nbsp; 
//   //           <input type='text' placeholder='Enter your email'style={{width :"70%" , borderRadius:"2%"}} ></input>
//   //           </div>
              
//   //            <div className="col-8 m-4">
//   //             <label><b>Password :</b></label>  &nbsp;  &nbsp; 
//   //             <input type='text' placeholder='Enter your password' style={{width :"70%" , borderRadius:"2%"}}></input>
//   //            </div>
               
//   //               <form>
//   //               <div className="col-8">
//   //             <button className='btn' style={{width:"25%"}}>Submit</button>
//   //             </div>
//   //               </form>

//   //          </div>
       
//   //        </form>
//   //        </div>
      
//   //   );
//   // };

  



// export default Signup;





// ===================================================================================================



﻿
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const Signup = () => {
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
      await axios.post('http://localhost:8000/signup', inputValue); // Sends formData to your endpoint
      alert("Data submitted successfully!");

   };
  
  
  return (
    <div className="form_container p-5 m-5 text-center">
      <img src="./logo.png" alt="Logo" style={{width : "10%"}}/>
      <h2 className="p-2 m-4" >Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-2 m-2">
          <label htmlFor="email">Email : &nbsp;</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            style={{width:"50%"}}
          />
        </div>
        <div className="p-2 m-2"> 
          <label htmlFor="email">Username : &nbsp;</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            style={{width:"50%"}}
          />
        </div>
        <div className="p-2 m-2">
          <label htmlFor="password">Password : &nbsp;</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            style={{width:"50%"}}
          />
        </div>
        <button className="p-2 m-4 fs-5" type="submit" style={{backgroundColor : "orangered", color:"white" , width:"40%"}}>Submit</button>
        <br></br>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
       </form>
      <ToastContainer />
    </div>
  );
};



//    // Building my own signup page
  //  return (
      
  //     <div className="form-container p-5 m-5 text-center" >
  //       <h2 className='fs-2  m-2' style={{color:"#4184f3"}}><i>Signup Account for Zerodha {allInfo}</i></h2>
  //       <form className='p-2 m-2'>
  //          <div className="row text-center p-5 m-2">

  //           <div className="col-8 m-4">
  //           <label><b>Username :</b></label> &nbsp;  &nbsp; 
  //           <input type='text' placeholder='Enter your username' style={{width :"70%" , borderRadius:"2%"}}></input>
  //           </div>
            
  //           <div className="col-8 m-4">
  //           <label ><b>Email :</b></label>  &nbsp;  &nbsp; 
  //           <input type='text' placeholder='Enter your email'style={{width :"70%" , borderRadius:"2%"}} ></input>
  //           </div>
              
  //            <div className="col-8 m-4">
  //             <label><b>Password :</b></label>  &nbsp;  &nbsp; 
  //             <input type='text' placeholder='Enter your password' style={{width :"70%" , borderRadius:"2%"}}></input>
  //            </div>
               
  //               <form>
  //               <div className="col-8">
  //             <button className='btn' style={{width:"25%"}}>Submit</button>
  //             </div>
  //               </form>

  //          </div>
       
  //        </form>
  //        </div>
      
  //   );
  // };

  



export default Signup;
