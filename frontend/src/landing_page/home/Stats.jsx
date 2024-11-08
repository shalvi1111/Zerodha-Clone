import React from 'react';

function Stats() {
    return (
         <>
        <div className="container p-3 ml-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                  <div className="">
                  <h1>Trust with confidence</h1>
                  </div >
                    
                    <div className='mt-5 text-muted'>
                    <h5>Customer-first always</h5>
                    <p className='mt-3'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                   <div>
                     
                     <div className='mt-5'>
                        <h5>No spam or gimmicks</h5>
                        <p className='mt-3 text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                        </p>
                     </div>

                     <div className='mt-5'>
                      <h5>The Zerodha universe </h5>
                      <p className='mt-3 text-muted'>
                      Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                      </p>
                     </div>
                       
                       <div className='mt-5'>
                        <h5>Do better with money </h5>
                        <p className='mt-3 text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                        </p>
                       </div>
                   </div>
                   

                </div>
                <div className="col-6 p-5">
                    
                    <div>
                    <img src='../font-awesome/media/images/ecosystem.png' alt='Ecosystem' style={{'width': '110%'}}/>
                     
                     <div className="links m-4 ">
                     <a href='#'  className= "m-2"style={{textDecoration:'none'}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                     &nbsp; &nbsp;

                     <a href='#' className= "m-2" style={{textDecoration:'none'}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                     </div>
                     
                    </div>
                    
                </div>
            </div>

        </div>
    </> 
     );
}

export default Stats;