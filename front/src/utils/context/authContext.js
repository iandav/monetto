import { createContext } from "react"
import { useAuth } from "../hooks/useAuth"
import { useLocation, Navigate } from "react-router-dom"


const AuthContext = createContext(null)

const auth = {
    isAuthenticated: false,
    signin: (callback) => {
        callback()
        auth.isAuthenticated = true
    },
    signout: (callback) => {
        callback()
        auth.isAuthenticated = false
    }
}


function RequireAuth({children}) {
    const auth = useAuth()
    const location = useLocation()

    if(!auth.user) {
        return <Navigate to="/login" state={{from: location}} replace/>
    }

    return children
}


export {
    auth,
    RequireAuth,
    AuthContext
}