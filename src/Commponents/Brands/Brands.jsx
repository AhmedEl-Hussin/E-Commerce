import React, { useEffect, useState } from 'react'
import axios from "axios";

import { Link, useNavigate } from 'react-router-dom';


export default function Brands() {
   
    const [Brand, setBrand] = useState([])

  async function getBrands()
  {
   try {
    let{data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    setBrand(data.data);
   
    console.log(Brand);
   } catch (error) {
    console.log("Error",error);
   }
  }

  useEffect(() => {
  
    getBrands();
     
    }, [])
  return (
    <>
   
<div className="container-fluid w-75 m-auto">
<div className="row gy-4">
            <div className="col-md-3">
                <div className="title ">
                    <h3 className='text-main fw-bold ' style={{color:"green"}}>Our Brands</h3>
                    <p className='text-muted'> You can see our brands and each brand include the products in it</p>
                </div>
            </div>
            {
                Brand.map((item,index)=>(
                    <div key={index} className='col-md-3'>
                    <Link to={`/dashboard/branddetails/${item._id}`}  style={{textDecoration:"none"}} >
                    <div className='text-center mx-2 rounded-4 p-2'>
                        <img src={item.image} className='w-100' alt="brands"/>
                        <h3 >{item.name}</h3>
                    </div>
                    </Link>

                    </div>

                ))
            }
            </div> 
</div>
           
       
    </>
  )
}
