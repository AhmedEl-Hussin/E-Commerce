import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export default function RestPassword() {

    const {
        register,
        handleSubmit,
        formState : { errors },
    } = useForm();

    return (
        <>
            <div className="Auth-container">

                <div className='caption'>
                    <h3 className='titleForm'>Reset New Password :</h3>

                    <form className='' onSubmit="">

        {/* ************************* for input email ***************************** */}
                        <div className='form-group  mt-3'>
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

        {/* ************************* for OTP code ***************************** */}
                        <div className='form-group mt-2'>
                            <label htmlFor="">Code Verification :</label>
                            <input className=' py-2 mt-1 form-control' 
                                type="text" 
                                {...register("seed" , {
                                    required: true,
                                })}
                            />

                            {errors.email && errors.email.type === "required" && (
                            <span className='text-danger mt-4'>OTP is required</span>
                            )}
                        </div>
                            
        {/* ************************* for input password ************************* */}
                        <div className='form-group mt-2'>
                            <label htmlFor="">New Password :</label>
                            <input className='py-2 mt-1 form-control' 
                                type="password" 
                                {...register("password" , {
                                    required : true,
                                    pattern : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/
                                })}
                            />

                            {errors.password && errors.password.type === "required" && (
                            <span className='text-danger mt-4'>Password is required</span>
                            )}

                            {errors.password && errors.password.type === "pattern" && (
                            <span className='text-danger mt-4'>Password must include at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long</span>
                            )}
                        </div>

        {/* ************************* for input Confirm password ************************* */}
                        <div className='form-group mt-2'>
                            <label htmlFor="">Confirm new password :</label>
                            <input className='py-2 mt-1 form-control' 
                                type="password" 
                                {...register("confirmPassword" , {
                                    required : true,
                                    pattern : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/
                                })}
                            />

                            {errors.password && errors.password.type === "required" && (
                            <span className='text-danger mt-4'>Password is required</span>
                            )}

                            {errors.password && errors.password.type === "pattern" && (
                            <span className='text-danger mt-4'>Password must include at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long</span>
                            )}

                        </div>
                            
                        <button type="submit" className='btn btnSubmit mt-2'> Submit </button>
                            
                    </form>
                            
                </div>
                            
            </div>
        </>
    )
}
