import React from 'react';
function Team() {
    return ( 
    <> 

    <div className="container m-5 p-5  border-top ">
    <h1 className='text-center '>People</h1>
        <div className="row  m-5">
            <div className="col-4  m-5">
            <img src='../font-awesome/media/images/nithinKamath.jpg' alt='Owner' 
               style={{borderRadius:"50%" , width:"90%"}} />
               <h1 className='mt-4 fs-4 text-muted text-center'>Nithin Kamath</h1>
               <h4 className='text-muted fs-6 mt-4 text-center' >Founder , CEO</h4>
            </div>
              <div className="col-6 p-5 m-10">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p>
                Playing basketball is his zen.
                </p>

                <p>
                    Connet on <a href='#'>Homepage</a> / <a href='#'>Trading QnA</a> /
                    <a href='#'>Twitter</a>
                </p>
              </div>
        </div>
    
    </div>
    
    </> 
    );
}

export default Team;