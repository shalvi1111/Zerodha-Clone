import React from 'react';
import Hero from './Hero';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import Universe from './Universe';
function ProductPage() {
    return (  
        <>
          <Hero/>
          <LeftComponent  imageURL="../font-awesome/media/images/kite.png" productTitle ="Kite" productDescription ="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
          " tryDemo="Try demo" learnMore="" googlePlay="" appStore =""/>

<RightComponent  productTitle="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." KiteConnect=" " imageURL ="../font-awesome/media/images/console.png"/>


<LeftComponent  imageURL="../font-awesome/media/images/kite.png" productTitle ="Coin" productDescription ="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore =""/>

<RightComponent  productTitle="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.

" KiteConnect=" " imageURL ="../font-awesome/media/images/kiteconnect.png"/>



<LeftComponent  imageURL="../font-awesome/media/images/varsity.png" productTitle ="Varsity mobile" productDescription ="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.

" tryDemo="" learnMore="" googlePlay="" appStore =""/>

  
      <h4 className='text-center p-3 m-4 text-muted'>Want to know more about our technology stack? Check out the <a href=''>Zerodha.tech</a> blog.</h4>

       <Universe />
         
        </>
    );
}

export default ProductPage;