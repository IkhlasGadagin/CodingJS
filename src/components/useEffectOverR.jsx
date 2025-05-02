import React, { useEffect, useState } from 'react'


const EffectOverR = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setData(data)
            console.log(data)
            setLoading(false)
        }
        catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>useEffectOver</div>
    )
}

export default EffectOverR