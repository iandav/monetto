const BASE_ACCOUNTS_URL = 'http://localhost:3000/api/accounts/'
const currentUser = sessionStorage.getItem("user")

export const getAccountsFromUser = async (username = currentUser) => {
    const response = await fetch(`${BASE_ACCOUNTS_URL}${username}`, {
        method: 'GET',
        credentials: 'include'
    })
    
    return await response.json()
}

export const getAccountFromAccountId = async (accountId) => {
    const response = await fetch(`${BASE_ACCOUNTS_URL}${accountId}`, {
        method: 'GET',
        credentials: 'include'
    })
    
    return await response.json()
}

export const createAccount = async (data) => {
    const response = await fetch(`${BASE_ACCOUNTS_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    return await response.json()
}


export const deleteAccount = async (accountId) => {
    const response = await fetch(`${BASE_ACCOUNTS_URL}${accountId}`, {
        method: 'DELETE',
        credentials: 'include'
    })
    
    return await response.json()
}