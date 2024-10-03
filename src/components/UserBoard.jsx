import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Model from './Model'

const UserBoard = () => {
    const [users, setUsers] = useState(null)
    const [modelData, setModelData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [post, setpost] = useState(null)
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
        title: ''
    })

    const userArray = async () => {
        setLoading(true)
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
        setLoading(false)
    }
    useEffect(() => {
        userArray()
    }, [])

    const openModal = async (id) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        setModelData(res.data)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }


    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = { ...formData, id: 11 }
        try {
            setLoading(true)
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
            setpost(res.data)
            setLoading(false)
        } catch (error) {
            console.error('Error creating post:', error)
        }
        setFormData({ name: '', email: '', comment: '', title: '' })
    }

    return (
        <div className='lg:w-[60%] px-3 md:px-10 lg:px-0 mx-auto my-10'>
            <div className='flex items-center justify-center flex-col gap-2'>
                <h1 className='font-semibold text-3xl'>User Board</h1>
                <p className='text-sm'>Welcome to the User Board</p>
            </div>
            <form onSubmit={handleSubmit} className='my-8'>
                <div className='flex items-center justify-center gap-4 flex-col md:flex-row'>
                    <div className='mb-4 w-full'>
                        <label className='block text-sm font-medium mb-2'>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded px-4 py-2'
                            placeholder='Enter Name'
                            required
                        />
                    </div>
                    <div className='mb-4 w-full'>
                        <label className='block text-sm font-medium mb-2'>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded px-4 py-2'
                            placeholder='Enter Email'
                            required
                        />
                    </div>
                </div>
                <div className='mb-4 w-full'>
                    <label className='block text-sm font-medium mb-2'>Title</label>
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded px-4 py-2'
                        placeholder='Enter Title'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2'>Comment</label>
                    <textarea
                        name='comment'
                        value={formData.comment}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded px-4 py-2'
                        placeholder='Enter Comment'
                        rows='3'
                        required
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='bg-blue-600 text-white p-2 rounded-lg'>
                    Submit
                </button>
            </form>

            {/* posts */}
            <div>
                <h1 className='font-semibold text-xl'>Posts</h1>
                <div>
                    {!post ? <p>No posts yet.</p>
                        :
                        <div key={post.id} className='border p-4 m-2 rounded-lg'>
                            <h3><strong>Name: </strong>{post.name}</h3>
                            <h3 className='pb-3'><strong>Email: </strong> {post.email}</h3>
                            <h3><strong>Title: </strong> {post.title}</h3>
                            <h3><strong>Comment: </strong> {post.comment}</h3>
                        </div>
                    }
                </div>
            </div>




            {/* Tabel  */}
            {!loading ? <table className='table-auto w-full mt-6'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='px-4 py-2'>ID</th>
                        <th className='px-4 py-2'>Name</th>
                        <th className='px-4 py-2'>Email</th>
                        <th className='px-4 py-2'>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <tr key={user.id} className='border'>
                            <td className='border px-4 py-2'>{user.id}</td>
                            <td className='border px-4 py-2'>{user.name.slice(0, 30)}</td>
                            <td className='border px-4 py-2'>{user.email.slice(0, 60)}</td>
                            <td onClick={() => openModal(user.id)} className='border cursor-pointer'>
                                <span className=' flex items-center justify-center m-2 bg-blue-600 text-white p-2 rounded-lg'>See</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> : <h1 className='flex items-center justify-center font-semibold'>Loading....</h1>}

            {showModal && modelData && (
                <Model modelData={modelData} closeModal={closeModal}/>
            )}
        </div>
    )
}

export default UserBoard