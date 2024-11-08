import React from "react";


function Education(){
    return<>
     <div className="container p-5 m-5">
        <div className="row ">
            <div className="col-5 p-1">
            <img src="../font-awesome/media/images/education.svg" alt="Education" ></img>
            </div>
            <div className="col-7 p-5  ">
                <h1 className="mb-4">Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="#" className="mb-5" style={{textDecoration:"none"}}>Varsity &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>

                <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="#" style={{textDecoration:"none"}}>TradingQ&A &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            </div>

        </div>

          
     </div>
    </>
}

export default Education;