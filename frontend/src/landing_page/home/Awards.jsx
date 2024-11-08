import React from "react";

 
function Awards(){
    return(
      <>
        <div className="container mt-5">
           <div className="row">
              <div className="col-6 p-5">
                <img src= "../font-awesome/media/images/largestBroker.svg " alt="Award" />
              </div>
              <div className="col-6 p-5">
                 <h1 className="mb-4 mt-2">Largest Stock Broker in India</h1>
                  <div className="info " style={{'fontSize':20}}>
                 <p >2+ million Zerodha clients contribute to over 15% of all retail order
                    volumes in India daily by trading and investing in.
                 </p>

                 <ul className="row mb-4 mt-5">
                  <li className="col-6 mt-2">Futures and Options</li>
                  <li className="col-6 mt-2">Stocks & IPOs</li>
                  <li  className="col-6 mt-2">Commonly derivatives</li>
                  <li  className="col-6 mt-2">Direct mutual funds</li>
                  <li  className="col-6 mt-2">Currency derrivatives</li>
                  <li  className="col-6 mt-2" >Bonds and Government</li>
                 </ul>
                 </div>
                 <img src="../font-awesome/media/images/pressLogos.png" alt="Information" style={{'width':600 }}/>
              </div>
           </div>
        </div>
      
      </>
    )
}

 export default Awards;