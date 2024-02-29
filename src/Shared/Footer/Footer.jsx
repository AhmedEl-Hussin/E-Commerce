import React from 'react'
import amazon from '../../assets/images/amazonpay-logo-rgb-clr.svg'
import amerian from '../../assets/images/americanexpress.jpg'
import mastercard from '../../assets/images/MasterCard_Logo.svg.png'
import paypal from '../../assets/images/PayPal-Logo.png'
import googlePlay from '../../assets/images/360_F_371954077_optGuvGbji51IXB3MuJsodhSqTD0sd3W.jpg'



export default function Footer() {
    return (
        <>
            <footer className='mt-4 py-4 mb-auto'>
                <div className='container'>
                    <h3 className='footerTitle'>Get the FreshCart app</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, eaque?</p>

                    <div className='row gy-2'>

                        <div className="col-md-10">
                            <input disabled  type="email" placeholder='Email..' className='form-control' />
                        </div>

                        <div className="col-md-2">
                            <button  className='btn text-white public-bg'>Share App Link</button>
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className='d-flex justify-content-between mt-4'>

                        <div className='row g-0 w-50'>
                            <div className='col-md-3'>
                                <h5 className='py-'>Payment Partners</h5>
                            </div>

                            <div className='col-md-9 '>
                                <img className='img' src={amazon} alt="Amazon log" />
                                <img className='img ms-2' src={amerian} alt="amerian express logo" />
                                <img className='img ms-2' src={mastercard} alt="mastercard logo" />
                                <img className='img ms-2' src={paypal} alt="paypal logo" />                            
                            </div>
                        </div>

                        <div className=' w-50'>
                            <div className='row g-0'>

                            <div className='col-md-6'>
                                <h4 className='py-'>Get deliveries with FreshCart</h4>
                            </div>

                            <div className='col-md-6 '>
                                <img className=' googleImg w-5' src={googlePlay} alt="" />                                
                            </div>

                            </div>

                        </div>

                    </div>

                    <div className='line'></div>

                </div>
            </footer>
        </>
    )
}
