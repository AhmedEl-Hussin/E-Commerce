import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export default function ReqRestPassword() {

    const {
        register,
        handleSubmit,
        formState : { errors },
    } = useForm();

    return (
        <>
            <div className="Auth-container py-4">

                <div className='caption'>
                    <h5 className='titleForm'>Please enter your email address. you will receive a verification code..</h5>

                    <form className='' onSubmit="">

        {/* ************************* for input email ***************************** */}
                        <div className='form-group  mt-4'>
                            <label htmlFor="">Email :</label>
                            <input className=' py-2 mt-1 form-control  ' 
                                type="email" 
                                {...register("email" , {
                                    required: true,
                                    pattern : /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                })}
                            />

                            {errors.email && errors.email.type === "required" && (
                            <span className='text-danger mt-4'>Email is required</span>
                            )}

                            {errors.email && errors.email.type === "pattern" && (
                            <span className='text-danger mt-4'>invaild email</span>
                            )}
                        </div>
                            
                        <button type="submit" className='btn btnSubmit  mt-2'> 
                            <Link className='text-decoration-none text-white' to="/restPassword">Send</Link>
                        </button>
                            
                    </form>
                            
                </div>
                            
            </div>
        </>
    )
}
