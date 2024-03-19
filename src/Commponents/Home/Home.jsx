import React, { useEffect, useState } from 'react'
import MainSlider from '../../Shared/MainSlider/MainSlider'
import { Helmet } from 'react-helmet';
import photo from '../../assets/images/tharha.jpeg'
import man from "../../assets/images/img1.jpeg"
import CategorySlider from '../../Shared/CategorySlider/CategorySlider';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Home() {


    const [products, setProducts] = useState([])
    const [isloading, setisLoading] = useState(false)
    

    {/* ################# to get all products ##################  */}
    const getAllProducts = ()=> {

        axios.get(`https://ecommerce.routemisr.com/api/v1/products` ,
        {
            params: {'sort':'price'}
        })

        .then((response) => {
            setProducts(response.data.data)
        })

        .catch((error) => {
            console.log(error);
        })
    }

    {/* ################# to add to cart  ##################  */}   
    // const addToCart = (productId)=> {

    //     setisLoading(true)

    //     axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , productId )
    //     .then((response)=> {
    //         console.log(response);
    //     })

    //     .catch((error)=> {
    //         console.log(error);
    //     })
    // }

    // function addToCart(productId)
    // {
    //    return   axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
    //        productId:productId
    //    },
    //    {
    //          headers:headers
    //    }).then((response)=> response).catch((error)=> error)
    // }


    useEffect(() => {
        getAllProducts();
    }, [])


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
        {/* ################# to head slider ##################  */}
            <MainSlider/>
        {/* ################# to category slider ##################  */}
            <CategorySlider/>

            <h1>Ahmed Moahmed hassan</h1>

            <div className='row gy-4'>

                {products.map((product , index)=> 
                    <div className='col-xl-2 col-lg-3 col-md-6'>

                        <div className='product'>
                            <Link to={`/dashboard/product-details/`+ product._id} className='text-black text-decoration-none'>
                                <div>
                                    <div className='productImg w-100'>
                                        <img className='w-100' src={product.imageCover} alt={product.title} />
                                    </div>

                                    <span className='puplic-color'> {product.category.name} </span>
                                    <h6> {product.title.split(' ').slice(0,2).join(' ')} </h6>

                                    <div className='d-flex justify-content-between'>

                                        <span className='text-muted'>
                                            {product.priceAfterDiscount?
                                                <>
                                                <span className='text-decoration-line-through'>{product.price}</span>
                                                <span className='ms-3'>{product.priceAfterDiscount}</span>
                                                </>  : <span>{product.price}</span>
                                                } EGP
                                        </span>

                                        <span>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            {product.ratingsAverage}
                                        </span>
                                    </div>

                                </div>
                            </Link>
                            
                            <button className='btn btnAdd public-bg text-white w-100 mt-2'>Add to cart</button>
                        </div>
                        
                    </div>
                )}

            </div>
        </>
    )
}
