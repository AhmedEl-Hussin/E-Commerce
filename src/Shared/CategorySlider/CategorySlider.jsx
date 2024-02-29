import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { toast } from 'react-toastify';

export default function CategorySlider() {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
    arrows:false
  };
  const [categories, setCategories] = useState([])

  {/* ################# to get cagegory list in slider ##################  */}
  const getAllCategories = ()=>{
    
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    
    .then((response)=> {
      setCategories(response.data.data)
      // console.log(response);
    })
    .catch((error)=> {
      toast.error(error?.message);
    })
  }

  useEffect(() => {
    getAllCategories()
  }, [])



  return (
    <>
      <div className="my-5">
        <h3 className='puplic-color'>Shop Popular Categories</h3>
        <Slider {...settings} autoplaySpeed={3000}>
        {categories.map((item)=>{
              return<div key={item._id}>
                      <img  src={item.image} height={300} className='w-100 slid2' alt={item.name} />
                      <h6 className='puplic-color fs-5 fw-light'>{item.name}</h6>
                    </div>
        })}
        </Slider>
      </div>
    </>
  )
}
