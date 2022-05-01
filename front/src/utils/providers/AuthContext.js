import { useState } from "react"
import { auth } from "../../api/auth"
import { AuthContext } from "../context/authContext"


function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    const signin = (newUser, callback) => {
        console.log(newUser)
        return auth.signin(() => {
            setUser(newUser)
            callback()
        })
    }

    const signout = (callback) => {
        return auth.signout(() => {
            setUser(null)
            callback()
        })
    }

    let value = { user, signin, signout }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export {
    AuthProvider
}