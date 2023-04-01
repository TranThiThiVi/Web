

import React from 'react'
import useAuth from "../custom/useAuth"
import { Navigate } from 'react-router-dom'
const Productrouter = ({children}) => {

    const {currentUser}=useAuth()
  return (
    currentUser ? children : <Navigate to="login"/>
  )
}

export default Productrouter