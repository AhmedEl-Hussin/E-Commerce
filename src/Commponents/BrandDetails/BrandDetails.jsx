import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function BrandDetails() {
const navigate=useNavigate();
    const{id}=useParams();
    const [brandInfo,setBrandInfo]=useState([]);
    const getBrandInfo=async()=>{
try {
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products`
    ,{params:{"brand":id}})
    setBrandInfo(data.data)
    console.log(data)
} catch (error) {
    console.log(error)
}
    }
    useEffect(()=>{
        getBrandInfo()
    },[])
  return (
    <>
    <div className="container-fluid w-75 m-auto">
    {brandInfo.length==0?(<div>
        <h1 className='text-main'>No Products Available in The Store Right Now!</h1>
    </div>):(<div>
        
            <div className="row gy-4 justify-content-center align-items-center ">
               {
                brandInfo.map((item,index)=>(
                    <div key={index} className="col-md-2">
             <div onClick={()=>{navigate(`/product-details/${item._id}`)}} className="product cursor-pointer px-2 py-3" >
             <img src={item.imageCover} className='w-100' alt="product"/>
             <span className=' fw-bold'>{item.category.name}</span>
             <h4>{item.title.split(" ").slice(0,2).join(" ")}</h4>
             <div className="d-flex justify-content-between">
              <span className='text-muted'>{item.priceAfterDiscount?
            <>
            <span className='text-decoration-line-through'>{item.price}</span>
            <span className='ms-3'>{item.priceAfterDiscount}</span>
            </>  : <span>{item.price}</span>
            } EGP</span>
              <span>
               <i className='fas fa-star rating-color'></i>
               {item.ratingsAverage}
              </span>
           </div>
             </div>
                    </div>
                ))
               }
            </div>
       
        </div>)}
        </div>
    </>
  )
}
