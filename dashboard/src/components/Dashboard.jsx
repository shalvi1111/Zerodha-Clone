import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import  Login  from "./Login";
import { GeneralContextProvider } from "./GeneralContext";
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./Signup";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path ="/login" element= { <  Login /> } />
          {/* <Route path = "/signup" element = { <Signup />}  /> */}
           
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard;
