import React from 'react';
function Pricing() {
    return ( 
        <>
       <div className="container">
        <div className="row m-5 p-5">
            <div className="col-5 mb-3 " style={{alignContent:"center"}}>
                <h2>Unbeatable pricing</h2>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                   </p>
                   <a href='#' style={{textDecoration:"none"}}>See prcing &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                   </a>

            </div>
            <div className="col-7  " style={{alignItems:"center"}}>
                <div className="row">
                <div className="col-4">
                 <img src='../font-awesome/media/images/pricing0.svg' alt='Pricing 0'/>
                 <span className='fs-5 text-muted'>Free account
                 opening</span>
                </div>
                <div className="col-4">
                <img src='../font-awesome/media/images/pricingMF.svg' alt='Pricing 0'/>
                <span className='fs-5 text-muted'>Free equity delivery
                and direct mutual funds</span>
                </div>
                <div className="col-4">
                <img src='../font-awesome/media/images/pricing20.svg' alt='Pricing 20'/>
                <span className='fs-5 text-muted'>Free equity delivery
                and direct mutual funds</span>
                </div>
                </div>
            </div>
        </div>
       </div>

       </>
     );
}

export default Pricing;