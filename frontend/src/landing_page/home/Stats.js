import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
          <div className='row p-5'>
            <div className='col-6 p-5'>
              <h1 className='fs-2 mb-5'>Trust with confidence</h1>
              <h2 className='fs-4'>Customer-first always</h2>
              <p className='text-muted'>That's why 3 crore customers trust Zerodha with ₹8.5+ lakh crores woryh of equity investments.</p>
              <h2 className='fs-4'>No spams or gimmicks</h2>
              <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
              <h2 className='fs-4'>The Zerodha universe</h2>
              <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 150+fintech startups offer you tailored services specific to your needs</p>
              <h2 className='fs-4'>Do better with money</h2>
              <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with money.</p>
            </div>
            <div className='col-6 p-5'>
              <img 
                src='/media/images/ecosystem.png' 
                alt="Zerodha ecosystem illustration" 
                style={{width:"90%"}}
              />
              <div className='text-center'>
                <a href="/products" className='mx-5' style={{ textDecoration: 'none' }}>
                  Explore our products <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
                <a href="/kite-demo" style={{ textDecoration: 'none' }}>
                  Try Kite demo <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Stats;