import React from 'react';


function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/Images/education.svg" style={{width:"78%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Fees and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering from the basic to advanced trading.</p>
                    <a href="" style={{ textDecoration: 'none' }}>
                  Versity <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>

                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries..</p>
                    <a href="" style={{ textDecoration: 'none' }}>
                  TradingQ&A <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
                </div>
            </div>
        </div>
     );

}

export default Education;
