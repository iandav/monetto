const BASE_AUTH_URL = 'http://localhost:3000/api/auth/'

const signIn = async (data) => {
    const response = await fetch(BASE_AUTH_URL + 'signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const res = await response.json()
    return {
        success: response.ok,
        message: res.message
    }
}

const signUp = async (data) => {
    const response = await fetch(BASE_AUTH_URL + 'signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    if(response.ok) {
        const result = await signIn({
            nick: data.nick,
            password: data.password
        })
        return {
            success: result.success,
            message: result.message
        }
    }
    else {
        const res = await response.json()
        return {
            success: response.ok,
            message: res.message
        }
    }
}

const signOut = async () => {
    const response = await fetch(BASE_AUTH_URL + 'signout', {
        method: 'POST',
        credentials: 'include',
    })

    const res = await response.json()
    return {
        success: response.ok,
        message: res.message
    }
}

export {
    signIn,
    signUp,
    signOut
}