import React from 'react';
function Hero() {
    return ( <>
     
        
       
       <div className='container m-10 p-5'>
          <div className="row text-center">
          <div className='col textCenter'>
        <img src='../font-awesome/media/images/homeHero.png'alt='Hero Image' style={{"width" :1000 }} className='mx-auto d-block'/>
      
             <h2 className='mt-5 mb-3'>Invest in everythimg</h2>
             <p >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

            <button type="button" className="btn btn-primary mt-5">Signup for free</button>
          </div>
         </div>
       </div>
     
   
    </> 
    );
}

export default Hero;