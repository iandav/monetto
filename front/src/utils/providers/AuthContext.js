import { useState } from "react"
import { AuthContext } from "../context/authContext"
import { auth } from "../context/authContext"

function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    const signin = (newUser, callback) => {
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
