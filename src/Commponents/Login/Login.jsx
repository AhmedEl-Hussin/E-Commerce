import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


export default function Login() {

    const {
        register,
        handleSubmit,
        formState : { errors },
    } = useForm();
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(false);  


    const handleToggle = () => {
        if (type === "password") {
            setIcon(true);
            setType("text");
        } else {
            setIcon(false);
            setType("password");
        }
    };

    return (
        <>
            <div className="Auth-container">

                <div className='caption'>
                    <h3 className='titleForm'>Login Now :</h3>

                    <form className='' onSubmit="">

        {/* ************************* for input email ***************************** */}
                        <div className='form-group  mt-4'>
                            <label htmlFor="">Email :</label>
                            <input className=' py-2 mt-2 form-control fs-5 ' 
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
                        <div className='d-flex'>
                            <div className='w-100 mt-3 mb-2'>
                                <label htmlFor="">Password :</label>
                                <input className='py-2 mt-2 form-control fs-5 ' 
                                    type={type} 
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

                            <span className="iconTogle-login" onClick={handleToggle} >
                                {icon ? (
                                    <i className="fa-solid fa-eye"></i>
                                ) : (
                                    <i className="fa-solid fa-eye-slash"></i>
                                )}
                            </span>
                        </div>
                        

                        {/* <span className="" onClick={handleToggle} >
                            {icon ? (
                                <i className="fa-solid fa-eye"></i>
                            ) : (
                                <i className="fa-solid fa-eye-low-vision"></i>
                            )}
                        </span> */}

                        <Link className='link' to="/reqRestPassword">Forgot Your Password ?</Link> <br />
                        <button type="submit" className='btn btnSubmit mt-2'> Login </button>
                
                    </form>

                </div>

            </div>
        </>
    )
}
