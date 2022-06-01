import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import AddBlogPost from '../components/profile/AddBlogPost'

const AddBlogPage = () => {
    return (
        <>
            <Layout>
                <AddBlogPost />
            </Layout>
        </>
    )
}

export default AddBlogPage