import React from 'react'
import { Routes, Route } from "react-router-dom";
import AddBlogPage from '../pages/AddBlogPage';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="add-blog" element={<AddBlogPage />} />
        </Routes>
    )
}

export default AppRoutes