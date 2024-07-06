import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Sanketgholap107`)
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])

    return (
        <div>Git followers:{data.followers}</div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch(`https://api.github.com/users/Sanketgholap107`)
    return res.json()
}