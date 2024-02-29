import React, { useEffect, useState } from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Slider from 'react-slick'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false
    };

    const [productDetails, setProductDetails] = useState([])
    const [category, setCategory] = useState({})
    const [isloading, setisLoading] = useState(false)
    let {id}=useParams()

    const getProductDetails = ()=> {

        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

        .then((response) => {
            // console.log(response);
            setProductDetails(response?.data?.data)
            setCategory(response?.data?.data?.category)
        })

        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getProductDetails();

    }, [])
    
    return (
        <>
            <div className='row gy-4'>

                <div className='col-lg-3'>
                    <div className=' sldr mb-4'>
                        <Slider {...settings}  autoplay autoplaySpeed={3000}>
                            {productDetails.images?.map((image,index)=> 
                                <img key={index} className='w-100 sldr' alt={productDetails.title} src={image}/>
                            )}
                        </Slider>
                    </div>
                </div>

                <div className="col-lg-9 ">
                    <div className=' d-flex align-items-center h-100'>
                        <div className='w-100'>
                            <h3 className='ptoductTitle'>{productDetails.title}</h3>
                            <p className='text-muted my-2'>{productDetails.description}</p>
                            <span className='me-auto'>{category?.name}</span>

                            <div className="d-flex justify-content-between mt-4">
                                <span className='me-auto'>{productDetails.priceAfterDiscount?
                                    <>
                                    <span className='text-decoration-line-through'>{productDetails.price}</span>
                                    <span className='ms-3'>{productDetails.priceAfterDiscount}</span>
                                    </>  : <span>{productDetails.price}</span>
                                    } EGP</span>
                                <span className='ms-auto'>
                                    <i className='fas fa-star text-warning'></i>
                                    {productDetails.ratingsAverage}
                                </span>
                            </div>

                            <button  className='btn public-bg text-white w-100'> Add to cart</button>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
