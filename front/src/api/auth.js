import { useLocation, Navigate } from "react-router-dom"
import { useAuth } from "../utils/hooks/useAuth"

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
    RequireAuth
}