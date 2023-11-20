import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
    const navigate = useNavigate(); 
    return (
        <>
            <div>DashBoard</div>
            <button onClick={()=> navigate('/home')}>Go Home</button>
        </>
    )
}

export default DashBoard