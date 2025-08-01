import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            navigate("/login", {replace: true})
            return
        }
    },[])
  return children
}

export default ProtectedRoute