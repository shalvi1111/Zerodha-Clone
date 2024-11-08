import React from 'react';
function CreateTicket() {
    return (  
           <div className="container p-5 m-5 text-muted" >
            <h4 style={{marginLeft:"4rem"}}>To create a ticket, select a relevant topic</h4>
             
             <div className="row m-5 p-5">
                <div className="col-4 p-2 " >
                    <h5 className='mb-5' style={{fontWeight:"500"}}><i class="fa fa-plus-circle" aria-hidden="true"></i>
                    &nbsp; Account Opening </h5>
                    <div style={{marginLeft:"2.9rem" , fontSize:"small" }}>
                   <p> <a href='' style={{ textDecoration:"none"}}>Getting Started </a></p>
                   <p> <a href='' style={{ textDecoration:"none"}}> Online </a></p>
                  <p>   <a href='' style={{ textDecoration:"none"}}> Offline </a> </p>
                    <p><a href='' style={{ textDecoration:"none"}}> Charges </a></p>
                    <p><a href='' style={{ textDecoration:"none"}}> Company , Partnership and HUF </a></p>
                    <p> <a href='' style={{ textDecoration:"none"}}> Non Resident Indian (INR)</a></p>
                      </div>
                </div>
                <div className="col-4 p-2" >
                    <h5 className='mb-5' style={{fontWeight:"500"}}><i class="fa fa-user" aria-hidden="true"></i>
                    &nbsp; Your Zerodha Account  </h5>
                    <div style={{marginLeft:"2.9rem" , fontSize:"small" }}>
                   <p> <a href=''style={{ textDecoration:"none"}}>Login credentials</a></p>
                  <p>  <a href=''style={{ textDecoration:"none"}}>Your Profile</a></p>
                   <p>  <a href='' style={{ textDecoration:"none"}}>Account modification and segment addition</a> </p>
                   <p>  <a href='' style={{ textDecoration:"none"}}>CMR & DP ID </a></p>
                    <p><a href='' style={{ textDecoration:"none"}}>Nomination </a></p>
                    <p><a href='' style={{ textDecoration:"none"}}>Transfer and conversion of shares </a></p>
                      </div>
                </div>

                <div className="col-4 p-2 " >
                  <h5 className='mb-5' style={{fontWeight:"500"}}><i class="fa fa-bar-chart" aria-hidden="true"></i>
                  &nbsp; Trading and Markets</h5>
                 
                   <div style={{marginLeft:"2.9rem" , fontSize:"small" }}>
                  <p><a href=''style={{ textDecoration:"none"}}>Trading FAQs</a></p>
                 <p>  <a href=''style={{ textDecoration:"none"}}>Kite</a></p>
                 <p>  <a href='' style={{ textDecoration:"none"}}>Margins</a></p>
                  <p><a href='' style={{ textDecoration:"none"}}>Product and order types</a></p>
                 <p> <a href='' style={{ textDecoration:"none"}}>Corporate actions</a></p>
                  <p><a href='' style={{ textDecoration:"none"}}>Kite features</a></p>
                   </div>

                </div>

                <div className="col-4 p-2 " >
                  <h5 className='mb-5' style={{fontWeight:"500"}}><i class="fa fa-credit-card" aria-hidden="true"></i>
                  &nbsp; Funds</h5>
                 
                   <div style={{marginLeft:"2.9rem" , fontSize:"small" }}>
                  <p><a href=''style={{ textDecoration:"none"}}>Fund withdrawal</a></p>
                 <p>  <a href=''style={{ textDecoration:"none"}}>Adding funds</a></p>
                 <p>  <a href='' style={{ textDecoration:"none"}}>Adding bank accounts</a></p>
                  <p><a href='' style={{ textDecoration:"none"}}>eMandates</a></p>
                   </div>

                </div>

                <div className="col-4 p-2 " >
                  <h5 className='mb-5' style={{fontWeight:"500"}}><i class="fa fa-search-plus" aria-hidden="true"></i>
                  &nbsp; Console</h5>
                 
                   <div style={{marginLeft:"2.9rem" , fontSize:"small" }}>
                  <p><a href=''style={{ textDecoration:"none"}}>IPO</a></p>
                 <p>  <a href=''style={{ textDecoration:"none"}}>Portfolio</a></p>
                 <p>  <a href='' style={{ textDecoration:"none"}}>Funds statement</a></p>
                  <p><a href='' style={{ textDecoration:"none"}}>Profile</a></p>
                 <p> <a href='' style={{ textDecoration:"none"}}>Reports</a></p>
                  <p><a href='' style={{ textDecoration:"none"}}>Referral program</a></p>
                   </div>

                </div>

                <div className="col-4 p-2" >
                    <h5 className='mb-5' style={{fontWeight:"500"}}><i class="fa fa-money" aria-hidden="true"></i>
                    &nbsp; Coin  </h5>
                    <div style={{marginLeft:"2.9rem" , fontSize:"small" }}>
                   <p> <a href=''style={{ textDecoration:"none"}}>Understanding mutual funds and Coin</a></p>
                  <p>  <a href=''style={{ textDecoration:"none"}}>Coin app</a></p>
                   <p>  <a href='' style={{ textDecoration:"none"}}>Coin web</a> </p>
                   <p>  <a href='' style={{ textDecoration:"none"}}>Transactions and reports</a></p>
                    <p><a href='' style={{ textDecoration:"none"}}>National Pension Scheme (NPS) </a></p>
                      </div>
                </div>

               
             </div>
           </div>
     );
}

export default CreateTicket;