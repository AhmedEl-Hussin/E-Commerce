import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function AuthLayout() {
    return (
        <>
            <div className='bg-main'>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
            
        </>
    )
}
