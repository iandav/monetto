import { useContext } from "react"
import { AuthContext } from "../../api/auth"

function useAuth() {
    return useContext(AuthContext)
}

export {
    useAuth
}