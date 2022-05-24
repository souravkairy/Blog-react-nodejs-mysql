import React from 'react'
import { Routes, Route } from "react-router-dom";
import AddBlogPage from '../pages/AddBlogPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="add-blog" element={<AddBlogPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
        </Routes>
    )
}

export default AppRoutes