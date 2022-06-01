import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const RegistrationPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Layout>
                <div className="mx-5 my-5 sm:rounded-lg ">
                    <div className="max-w-md mx-auto bg-sky-50 p-6">
                        <div className="">
                            <div className='mb-6'>
                                <h3 className="text-4xl leading-6 font-medium text-gray-900">Registraion</h3>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-4">
                                    <div className="">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            {...register("email", { required: true })}
                                            className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-sm py-2 px-2 outline-hidden"
                                        />
                                        <p className='text-xs text-red-500'>{errors.email && <span>This field is required</span>}</p>
                                    </div>

                                    <div className="">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            {...register("password", { required: true })}
                                            name="password"
                                            className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-sm py-2 px-2"
                                        />
                                        <p className='text-xs text-red-500'>{errors.password && <span>This field is required</span>}</p>
                                    </div>
                                    <div className="">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Confirm Password
                                        </label>
                                        <input
                                            {...register("confirm_password", { required: true })}
                                            name="confirm_password"
                                            className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-sm py-2 px-2"
                                        />
                                        <p className='text-xs text-red-500'>{errors.confirm_password && <span>This field is required</span>}</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-sky-600 hover:bg-sky-700 "
                                        >
                                            login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default RegistrationPage