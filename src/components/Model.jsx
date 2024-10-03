import React from 'react'

const Model = ({modelData,closeModal}) => {
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'>
            <div className='bg-white p-6 rounded-lg w-[90%] md:w-[50%]'>
                <h2 className='font-semibold text-xl mb-4 flex justify-between'>Post Details</h2>
                {modelData ? <>{modelData.slice(0, 3).map(m => (
                    <div key={m.name} className='border-b-2 py-2 flex flex-col gap-2'>
                        <p><strong>Name:</strong> {m.name}</p>
                        <p><strong>Email:</strong> {m.email}</p>
                        <p><strong>Comment:</strong> {m.body}</p>
                    </div >
                ))}</> : <h1>No Data Found</h1>}
                <button
                    onClick={closeModal}
                    className='mt-4 bg-red-500 text-white p-2 rounded-lg'>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Model