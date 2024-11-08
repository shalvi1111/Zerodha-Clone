import React from 'react';
function Brokerage() {
    return ( 
        <>
         <div className="container border-top">
            <div className="row m-4 p-5">
                <div className="col-8">
                    <h4 style={{color:"#387ed1"}} className='text-center'>Brokerage Calculator</h4>
                    <ul className='mt-4' style={{fontSize:"16px"}}>
                        <li className='mb-3'>Call & trades and RMS auto-squareoff : Additional cahrges of &#8377; 50 
                            + GST per order.
                        </li>
                        <li className='mb-3'>Digital contract notes will be sent via email.</li>
                        <li className='mb-3'>Physical copies of contract notes, if required , shall be charged &#8377; 20 per contract
                            note. Courior charges apply.
                        </li>
                        <li className='mb-3'>For NRI account (non-PIS), 0.5% or &#8377; 100 per executed order for equity
                            (whichever is lower)
                        </li>
                        <li className='mb-3'>For NRI account (PIS), 0.5% or &#8377; 200 per executed order for equity
                            (whichever is lower)
                        </li>
                        <li className='mb-3'>If the account is inn debit balance , any order placed will be charged 
                        &#8377;40 per executed order.
                        </li>
                    </ul>
                </div> 
                <div className="col-4">
                <h4 style={{color:"#387ed1"}} className='text-center'>List of charges</h4>
                </div>
            </div>
         </div>
        </>
     );
}

export default Brokerage;