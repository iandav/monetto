import React, { createContext, useMemo, useState } from "react"
import { useLocation, Navigate } from "react-router-dom"

const AuthContext = createContext(null)

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const signin = (nick, callback) => {
    setUser(nick)
    sessionStorage.setItem("user", nick)
    callback()
  }

  const signout = (callback) => {
    setUser(null)
    sessionStorage.removeItem("user")
    callback()
  }

  const value = {
    user,
    signin,
    signout,
  }

  const authProviderValue = useMemo(() => value, [value])

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  )
}

function RequireAuth({ children }) {
  const location = useLocation()

  if (!sessionStorage.getItem("user")) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export { AuthContext, AuthProvider, RequireAuth }
