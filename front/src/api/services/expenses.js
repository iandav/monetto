const BASE_EXPENSES_URL = 'http://localhost:3000/api/expense/'
const currentUser = sessionStorage.getItem("user")

export const getExpensesFromUser = async (username = currentUser) => {
    const response = await fetch(`${BASE_EXPENSES_URL}user/${username}`, {
        method: 'GET',
        credentials: 'include'
    })
    
    return await response.json()
}

export const getExpensesFromAccountId = async (accountId) => {
    const response = await fetch(`${BASE_EXPENSES_URL}${accountId}`, {
        method: 'GET',
        credentials: 'include',
    })
    
    return await response.json()
}

export const addExpenseToAccount = async (data) => {
    const response = await fetch(`${BASE_EXPENSES_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    return await response.json()
}

export const deleteExpenseFromAccount = async (accountId) => {
    const response = await fetch(`${BASE_EXPENSES_URL}${accountId}`, {
        method: 'DELETE',
        credentials: 'include'
    })
    
    return await response.json()
}

