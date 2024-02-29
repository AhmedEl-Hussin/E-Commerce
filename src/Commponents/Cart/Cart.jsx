import React from 'react'
import { Helmet } from 'react-helmet'

export default function Cart() {
    return (
        <>
            <Helmet>
                <title>Carts</title>
            </Helmet>

            <div className='cart-caption my-5 p-5'>
                <h2 className='text-center fw-light puplic-color'> Welcome, Ahmed </h2>

                <div className='mt-3'>
                    <h4>Shop Cart :</h4>
                    <h5 className='fw-light'>Total Cart Price : <span className='puplic-color'>11920 EGP</span> </h5>
                </div>

                <button className='btn btn-outline-danger mt-2 mb-3'>Clear All</button>

                <div className='test row'>

                    <div className='col-md-2'>
                        <div className='bg-danger'>
                            <img src="" alt="" />
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <div className='bg-info'>
                            <h4>Ahmed</h4>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='bg-warning'>
                            <h4>Ahmed</h4>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
