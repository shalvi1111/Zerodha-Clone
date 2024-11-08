import React from 'react';
function RightComponent({productTitle , productDescription  , KiteConnect  
           , imageURL
}) {
    return ( 
        <>
           <div className="container">
         <div className="row p-4 right-component">
                      <div className="col-6 p-5  ">
                        <h1 className='mt-5'>{productTitle}</h1>
                        <p> {productDescription}
                     </p>

                        
                      <a href={KiteConnect} > Kite Connect 
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </a>
                      </div>  

                      <div className="col-6  p-3">
                        <img src= {imageURL} />
                      </div>
                 </div>

                 </div>
        </>
     );
}

export default RightComponent;