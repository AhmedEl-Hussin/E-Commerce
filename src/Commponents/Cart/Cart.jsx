import React from 'react'
import { Helmet } from 'react-helmet'
import man from '../../assets/images/man.jpeg'

export default function Cart() {
    return (
        <>
            <Helmet>
                <title>Carts</title>
            </Helmet>

            <div className='cart-caption my-5 p-5'>
                <h2 className='text-center fw-light puplic-color'> Welcome, Lames </h2>
                
                <div className='mt-3'>
                    <h4>Shop Cart :</h4>
                    <h5 className='fw-light'>Total Cart Price : <span className='puplic-color'>11920 EGP</span> </h5>
                </div>

                <button className='btn btn-outline-danger mt-2 mb-4'>
                    Clear All
                    <i className="fa-regular fa-trash-can ms-2"></i>
                </button>

                <div className='cart-line mb-4 row'>

                    <div className='col-md-1'>
                        <div className='cart-img'>
                            <img className='w-100 h-100' src={man} alt="" />
                        </div>
                    </div>

                    <div className='col-md-9'>
                        <div className=''>
                            <h5 className='fw-light'>Duramo 10 Running Shoes</h5>
                            <span className='puplic-color'>price : 1999</span> <br />
                            <button className='btn btn-outline-danger mt-2 mb-3'>
                                Delete
                                <i className="fa-regular fa-trash-can ms-2"></i>
                            </button>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='d-flex count mt-1'>
                            <button className='btn btn-outline-success'>+</button>
                            <span className='mx-1 mt-2'>23</span>
                            <button className='btn btn-outline-success'>-</button>
                        </div>
                    </div>

                </div>

            </div>

            


        </>
    )
}
