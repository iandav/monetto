import React from "react"
import { useLocation, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function RequireAuth({ children }) {
  const location = useLocation()
  const [user] = useAuth()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
