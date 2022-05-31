import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Blog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPost(response.data)
        })
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data)
        })
    }, [setPost])

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/comments', {
            postId: id,
            commentBody: data.commentBody
        })
            .then((response) => {
                const commentToAdd = { commentBody: data.commentBody };
                setComments([...comments, commentToAdd]);
            })
            .catch((error) => {
                console.log(error);
            })

        reset()
    }
    return (
        <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                            Introducing
                        </span>
                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {post.title}
                        </span>
                    </h1>
                    <p className="mt-8 text-xl text-gray-500 leading-8">
                        {post.postText}
                    </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto max-w-prose">
                    All Comments
                    <ul className='space-y-6'>
                        {comments?.map((data) =>
                            <li key={data.id} className="border p-4 border-teal-500">{data.commentBody}</li>
                        )}
                    </ul>
                    <form className="divide-gray-200" onSubmit={handleSubmit(onSubmit)}>
                        <div className=" divide-gray-200">
                            <div>
                                <div className="mt-6 space-y-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="commentBody" className="block text-sm font-medium text-gray-700">
                                            Comments
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="commentBody"
                                                {...register("commentBody")}
                                                rows={6}
                                                className="shadow-sm block w-full sm:text-sm border border-gray-300 rounded-sm px-3"
                                            />
                                            {errors.commentBody && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="">
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Blog