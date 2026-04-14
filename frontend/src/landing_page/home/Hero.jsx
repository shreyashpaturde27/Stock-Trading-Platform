import React from 'react';
function Hero() {
    return (   <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='hero' className='' />
                <h1 className='mt-5'>Invest in everthing</h1>
                <p>Online platform to invest in stocks,derivatives,mutual funds</p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign Up now</button>
            </div>
       </div>
       
     );
}

export default Hero;