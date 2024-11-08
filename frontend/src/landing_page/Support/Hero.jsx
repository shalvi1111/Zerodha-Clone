import React from 'react';
function Hero() {
    return (  
        <>
        <section className="container-fluid" id="supportHero">

            <div className="p-5" id='supportWrapper'>
               <h4>Support Portal</h4>
               <a href=''>Track Tickets</a>
            </div>

            <div className="row p-2">
               <div className="col-6 p-5 ">
                <h3 className='mb-4'>Search for an answer or browse help topics to create a ticket</h3>
                <input type='text' placeholder='Eg: how do i activate F&O, why is my order getting
                rejected... '  style={{width:"80%" , height:"30%" , borderRadius:"5%"}}  className='mb-4'
                /> 
                   <br></br>
                  
                   <a href='' className='mx-1'>Track account opening</a>
                 <a href=''  className='mx-2'>Track segment activation</a>  
                 <a href=''  className='mx-2'> Intraday margins</a> 
                 <a href='' className='mx-2'>Kite user manual </a> 
                  

                </div>

                <div className="col-6 p-5 ">
                    <h4>Featured</h4>
                    <ol>
                      <li> <a href='' >Suspension of trading - IDFC Limited</a> </li>
                      <li> <a href=''>Rights Entitlements listing in October 2024 </a></li>
                    </ol>
                    
                    

                  </div>

                  </div>




             </section>
            
            
        </>
      );
}

export default Hero;