import React from 'react';
function Hero() {
    return ( 
        <>
          <div className="container text-muted">

             <div className="heading text-center p-5 m-5">
             <h1>Charges</h1>
             <p className=' fs-4 mt-4'>List of all charges and taxes</p>
             </div>
             

             <div className="row text-center p-4 m-4">
                <div className="col-4 ">
                  <img src='../font-awesome/media/images/pricing0.svg' alt='Pricing 0' style={{width:"70%"}} /> 
                  <h2 className='m-3'>Free equity delivery</h2>
                  <p className='text-muted mt-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                </div>

                <div className="col-4">
                  <img src='../font-awesome/media/images/other-trades.svg' alt='Pricing MF'style={{width:"70%"}} />
                  <h3 className='m-3'>Intraday and F&O trades</h3>
                  <p className='text-muted mt-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>


                </div>

                <div className="col-4">
                <img src='../font-awesome/media/images/pricingEquity.svg' alt='Pricing Equity' style={{width:"70%"}} />
                  <h2 className='m-3'>Free direct MF</h2>
                  <p className='text-mmuted mt-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    
                </div>
             </div>
          </div>
        </>
     );
}

export default Hero;