const BASE_EARNINGS_URL = 'http://localhost:3000/api/earning/'
const username = sessionStorage.getItem("user")

/**
 * Fetch earnings from the backend. 
 * @returns Array<Object>
 */
export const getEarningsFromUser = async () => {

    const response = await fetch(`${BASE_EARNINGS_URL}user/${username}`, {
        method: 'GET',
        credentials: 'include'
    })
    
    return await response.json()
}

export const getEarningsFromAccountId = async (accountId) => {

    const response = await fetch(`${BASE_EARNINGS_URL}${accountId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    
    return await response.json()
}

export const addEarningToAccount = async (data) => {

    const response = await fetch(`${BASE_EARNINGS_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    return await response.json()
}

export const deleteEarningFromAccount = async (accountId) => {

    const response = await fetch(`${BASE_EARNINGS_URL}${accountId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    
    return await response.json()
}