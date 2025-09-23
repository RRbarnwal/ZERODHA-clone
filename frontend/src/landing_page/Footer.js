import React from 'react';

function Footer() {
    return (
        <footer style={{backgroundColor: "rgb(250, 250, 250"}}>
            <div className='container border-top mt-5'>
                <div className='row mt-5'>
                    {/* Logo and Copyright Column */}
                    <div className='col'>
                        <img 
                            src='media/Images/logo.svg' 
                            alt="Zerodha Logo" 
                            style={{ width: "50%" }}
                        />
                        <p className='mt-3 text-muted'>
                            &copy; 2010 - 2030, Not Zerodha Ltd. All rights reserved.
                        </p>
                    </div>

                    {/* Company Column */}
                    <div className='col'>
                        <p className='fw-bold mb-4'>Company</p>
                        <div className='d-flex flex-column'>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>About</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Products</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Pricing</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Referral programme</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Careers</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Zerodha.tech</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Press & media</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Zerodha cares (CSR)</a>
                        </div>
                    </div>

                    {/* Support Column */}
                    <div className='col'>
                        <p className='fw-bold mb-4'>Support</p>
                        <div className='d-flex flex-column'>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Contact</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Support Portal</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Z-Connect blog</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>List of charges</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Downloads & resources</a>
                        </div>
                    </div>

                    {/* Account Column */}
                    <div className='col'>
                        <p className='fw-bold mb-4'>Account</p>
                        <div className='d-flex flex-column'>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Open an account</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>Fund transfer</a>
                            <a href="#" className='text-muted mb-2' style={{textDecoration: 'none'}}>60 day challenge</a>
                        </div>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className='mt-5 text-muted' style={{ fontSize: "14px"}}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                    <p className='mb-5'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>



                {/* New Bottom Links Section */}
                    <div className='d-flex justify-content-center gap-4 mb-5'>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            NSE
                        </a>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            BSE
                        </a>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            MCX
                        </a>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            Terms & conditions
                        </a>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            Policies & procedures
                        </a>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            Privacy policy
                        </a>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            Disclosure
                        </a>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            For investor's attention
                        </a>
                        <a 
                            href="#" 
                            className='text-muted' 
                            style={{textDecoration: 'none'}}
                            onMouseEnter={e => e.target.style.color = '#387ED1'}
                            onMouseLeave={e => e.target.style.color = '#6C757D'}
                        >
                            Investor charter
                        </a>
                    </div>
                
            </div>
        </footer>
    );
}

export default Footer;