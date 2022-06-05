const BASE_AUTH_URL = "http://localhost:3000/api/auth/"

export const signin = async (data) => {
  const response = await fetch(`${BASE_AUTH_URL}signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const res = await response.json()
  return {
    success: response.ok,
    message: res.message,
  }
}

export const signup = async (data) => {
  const response = await fetch(`${BASE_AUTH_URL}signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    const signinResponse = await signin({
      nick: data.nick,
      password: data.password,
    })
    return {
      success: signinResponse.success,
      message: signinResponse.message,
    }
  }
  const res = await response.json()
  return {
    success: response.ok,
    message: res.message,
  }
}

export const signout = async () => {
  const response = await fetch(`${BASE_AUTH_URL}signout}`, {
    method: "POST",
    credentials: "include",
  })

  const res = await response.json()
  return {
    success: response.ok,
    message: res.message,
  }
}
