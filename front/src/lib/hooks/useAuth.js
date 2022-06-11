import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useLocalStorage from "./useLocalStorage"

const AFTER_LOGIN_PAGE = "/dashboard"

const useAuth = () => {
  const [user, setUser] = useLocalStorage("user")
  const navigate = useNavigate()

  const signin = (username) => {
    setUser(username)
  }

  const signout = () => {
    setUser(null)
  }

  useEffect(() => {
    if (user) {
      navigate(AFTER_LOGIN_PAGE, { replace: true })
    }
  }, [user])

  return [user, signin, signout]
}

export default useAuth
