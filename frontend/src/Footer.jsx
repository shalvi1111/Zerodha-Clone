import React from 'react';
function Footer() {
    return ( 
        <>
         <div className="container p-5 m-5 text-muted border-top">
            <div className="row">
                <div className="col-3">
                    <img src='../font-awesome/media/images/logo.svg' alt='Logo' 
                    style={{width:"50%"}} className="mb-4"/>
                    <p>© 2010 - 2024, Zerodha Broking Ltd.</p>
                   <p>  All rights reserved.</p>

                    <div className="social-media">
                    <i class="fa fa-twitter " aria-hidden="true"></i>
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>     
                    </div> 
                    <hr></hr>

                    <div className="contact">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    <i class="fa fa-telegram" aria-hidden="true"></i>
                    </div>

                </div>
                <div className="col-3">
                  <h5>Company</h5>
                  <ul className='ul-element'>
                    <li>About </li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Referral programme</li>
                    <li>Careers</li>
                    <li>Zerodha.tech</li>
                    <li>Press & media</li>
                    <li>Zerodha Cares (CSR)</li>
                  </ul>

                </div>

                <div className="col-3">
                    <h5>Support</h5>
                      <ul className='ul-element'>
                        <li>Contact us</li>
                        <li>Support portal</li>
                        <li>Z-Connect blog</li>
                        <li>List of charges</li>
                        <li>Downloads & resources</li>
                        <li>Videos</li>
                        <li>Market overview</li>
                        <li>How to file  a complaint?</li>
                        <li>Status of your complaints</li>
                    </ul>


                </div>

                <div className="col-3">
                    <h5>Account</h5>
                    <ul className='ul-element'>
                    <li>Open an account</li>
                    <li>Fund transfer</li>
                    </ul>


                </div>
            </div>

              <div className="content">

            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="">complaints@zerodha.com</a>, for DP related to <a href ="">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>


            <p>
            Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>

            <p>
                <a href="">Smart Online Dispute Resolution</a>
               &nbsp; |  &nbsp; <a href="">Grievances Redressal Mechanism</a>
            </p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="">create</a> a <a href="">ticket here</a>.</p>
       

           <ul className="footer-tags ">
            <li>NSE</li>
            <li>BSE</li>
            <li>Terms & conditions</li>
            <li>Policies & procedures</li>
            <li>Privacy policy</li>
            <li>Disclosure</li>
            <li>For investor's attention</li>
            <li>Investor charter</li>
           </ul>
         </div>


         </div>
        </>
     );
}

export default Footer;