import React from 'react';
function LeftComponent({ imageURL, productTitle, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <>
        <div className="container">
          <div className="row border-top p-4">
            <div className="col-6 p-3">
             <img src= {imageURL} />
                         </div>
            
            <div className="col-5 p-5 mt-3">
              <div>
              <h1>{productTitle}</h1>
              <p className='mt-5'>{productDescription}</p>

              </div>
       
                <div>
                <a href={tryDemo} >
                Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
             <a href={learnMore}  style={{marginLeft : "50px"}}>Learn More 
             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
             </a>

                </div>

                <div className='mt-4'>
                <a href={googlePlay} >
                <img src='../font-awesome/media/images/googlePlayBadge.svg'/>
             </a>
             <a href={appStore} style={{marginLeft : "50px"}}>
                 <img src='../font-awesome/media/images/appstore-badge.svg' />
             </a>


                </div>
             


            </div>
 
           </div>
        </div>
    </>
  );
}

export default LeftComponent;