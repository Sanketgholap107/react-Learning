import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams()
    return (
        <>
            <div className='text-3xl bg-gray-700 p-04 text-white'>user: {userid}</div>
        </>
    )
}

export default User;