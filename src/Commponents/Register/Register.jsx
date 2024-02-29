import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


export default function Register() {

    const {
        register,
        handleSubmit,
        formState : { errors },
    } = useForm();

    return (
        <>
            <div className='Auth-container'>
            <div className='caption'>
                    <h3 className='titleForm'>Register Now :</h3>

                    <form className='' onSubmit="">

        {/* ************************* for input Name ***************************** */}
                        <div className="form-group mt-3 ">
                            <label htmlFor="">User Name :</label>
                            <input
                                className=" py-2 form-control mt-1"
                                type="text"
                                {...register("userName", {
                                required: true,
                                })}
                            />

                            {errors.userName && errors.userName.type === "required" && (
                                <span className="text-danger mt-4"> userName is required </span>
                            )}
                        </div>

        {/* ************************* for input email ***************************** */}
                        <div className='form-group  mt-2'>
                            <label htmlFor="">Email :</label>
                            <input className=' py-2 mt-2 form-control mt-1 ' 
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

        {/* ************************* for input password ************************* */}
                        <div className='form-group mt-2 mb-2'>
                            <label htmlFor="">Password :</label>
                            <input className='py-2 mt-2 form-control mt-1 ' 
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

        {/* ************************* for input confirmPassword ************************* */}
                        <div className="form-group">
                            <label htmlFor="">Confirm New Password :</label>
                            <input
                                className="py-2 mt-2 form-control mt-1"
                                type="password"
                                {...register("confirmPassword", {
                                    required: true,
                                    pattern:
                                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/,
                                })}
                            />

                            {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                                <span className="text-danger mt-4"> confirmPassword is required </span>
                            )}

                            {errors.confirmPassword && errors.confirmPassword.type === "pattern" && (
                                <span className="text-danger mt-4">
                                    confirmPassword must include at least one lowercase
                                    letter, one uppercase letter, one digit, one special
                                    character, and be at least 6 characters long
                                </span>
                            )}
                        </div>

        {/* ************************* for input Phone Number ***************************** */}
                        <div className="form-group">
                            <label htmlFor="">Phone Number :</label>
                            <input
                                className=" py-2 mt-1 mt-2 form-control"
                                type="number"
                                {...register("phoneNumber", {
                                    required: true,
                                })}
                            />

                            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                                <span className="text-danger mt-4"> phoneNumber is required </span>
                            )}
                        </div>

                        <button type="submit" className='btn btnSubmit mt-2'> Register </button>
                
                    </form>

                </div>
            </div>
        </>
    )
}
