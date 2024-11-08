import React from 'react';
function Universe() {
    return ( 
        <>
        <div className="container text-center p-5 m-5 text-muted">
            <h2 className='p-3 m-2'>The Zerodha Universe </h2>
            <p >Extend your trading and investment experience even further with our partner platforms
         </p>  
          
            <div className="row p-4 m-5">
                <div className="col-4">
                  <img src='../font-awesome/media/images/zerodhaFundhouse.png' style={{width : "50%"}}  />
                  <p className='mt-4 ' style={{fontSize:"small"}}> 
                    Our asset management venture that is creating simple and transparent index funds to  help you save for your goals.
                  </p>
                </div>

                <div className="col-4">
                <img src='../font-awesome/media/images/sensibullLogo.svg' style={{width : "70%"}} className='mb-2'/>   
                 <p className='mt-4 ' style={{fontSize:"small"}}>
                    Options trading platform that lets you create strategies, analyze positions , and examine data points like open interest , FII/DII and more.
                 </p>

                    
                </div>

                <div className="col-4">
                <img src='../font-awesome/media/images/tijori.svg' style={{width : "40%"}} />
                    <p className='mt-4 ' style={{fontSize:"small"}}>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more
                    </p>
                </div>

                <div className="col-4 mt-4">
                <img src='../font-awesome/media/images/streakLogo.png' style={{width : "50%"}} />
                <p className='mt-4 ' style={{fontSize:"small"}}>
                    Systematic trading platform that allows you to create and backtest strategies without coding.
                </p>
                </div>

                 <div className="col-4 mt-4">
                 <img src='../font-awesome/media/images/smallcaseLogo.png' style={{width : "60%"}} />

                 <p className='mt-4 ' style={{fontSize:"small"}}>
                    Thematic investing platform that helps you invest in diversified baskets of 
                    stocks on ETTFs.
                 </p>
                 </div>

                 <div className="col-4 mt-4">
                 <img src='../font-awesome/media/images/dittoLogo.png' style={{width : "40%"}} />
                <p className='mt-4 ' style={{fontSize:"small"}}>
                    Personalized advice on life and health insurance. No spam and no mis-selling.
                </p>
                 </div>


            </div> 

            <button type="button" class="btn btn-primary fs-5"  style={{width:"20%" , height:"2.8rem"}}>Sign up for free </button>
        </div>
        </>
     );
}

export default Universe;