import React from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-navbar z-3 position-sticky top-0 mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/dashboard">
                        <img src={logo} alt="" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

            {/* ################# link for pages ################### */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/brands">Brands</Link>
                            </li>

                            <li className="nav-item position-relative">
                                <Link className="nav-link" to="/dashboard/cart">Cart
                                    <i className='fas mx-1 puplic-color fa-shopping-cart fa-lg'></i>
                                    <span className='public-bg position-absolute top-0 px-1 rounded-2 text-white'>
                                    {/* {numOfCartItems} */}
                                    23
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link ms-3 EditLink" to="/dashboard/allorders">All orders</Link>
                            </li>
        
                        </ul>

            {/* ################# link for icons ################### */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <div className='d-flex align-items-center'>
                                
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">
                                        <i className='fab fa-facebook social'></i>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="#">
                                        <i className='fab fa-twitter cursor-pointer social-icon'></i>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="#">
                                        <i className='fab fa-instagram social-icon'></i>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="#">
                                        <i className='fa-brands fa-github social-icon'></i>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="#">
                                        <i className='fa-brands fa-linkedin-in social-icon'></i>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="#">
                                        <i className='fab  fa-youtube cursor-pointer social-icon'></i>
                                    </Link>
                                </li>

                            </div>
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link myName " aria-current="page" to="#"> Hello, Ahmed </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="#"> Logout </Link>
                                </li>
                            </>

                            <>
                                <li className="nav-item">
                                    <Link className="nav-link  " aria-current="page" to="/"> Login </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/register"> Register </Link>
                                </li>
                            </>
                            
                            
                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}
