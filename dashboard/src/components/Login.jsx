import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      const { data } = await axios.post(
        // "http://localhost:8000/login",
        "https://zerodha-backend-dashboard-clone.vercel.app/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container text-center p-5 m-5">
         <img src="./logo.png" alt="Logo" style={{width : "10%"}}/>
      <h2 className="p-2 mt-4">Login Account</h2>
      <form onSubmit={handleSubmit} >
        <div className="p-2 mb-2">
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
        <div className="p-2 mb-2">
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
        <button className="p-2 m-4 fs-5 " type="submit" style={{backgroundColor : "orangered", color:"white", width:"40%"}}>Login  </button>
        <br></br>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;