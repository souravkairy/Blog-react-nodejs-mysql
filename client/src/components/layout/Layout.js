import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex justify-between max-w-7xl px-8 py-4 border-b'>
                <Link to="/">
                    <div className='text-2xl font-semibold text-sky-600 flex justify-start items-center'>Blog</div>
                </Link>
                <div className='flex justify-end items-center space-x-3'>
                    <Link to="/add-blog">
                        <button className='px-6 border border-sky-600 text-sky-600 py-1 hover:bg-sky-200'>Add Blog</button>
                    </Link>
                    <Link to="/login">
                        <button className='px-6 border border-sky-600 text-sky-600 py-1 hover:bg-sky-200'>Login</button>
                    </Link>
                    <Link to="/register">
                        <button className='px-6 border border-sky-600 text-sky-600 py-1 hover:bg-sky-200'>SignUp</button>
                    </Link>
                    <button disabled className='px-6 border border-sky-600 text-sky-600 py-1 hover:bg-sky-200'>Sourav</button>
                </div>
            </div>
            {children}
        </>
    )
}

export default Layout