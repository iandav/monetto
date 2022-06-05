const BASE_ACCOUNTS_URL = "http://localhost:3000/api/accounts/"
const currentUser = sessionStorage.getItem("user")

export const getAccountsFromUser = async (username = currentUser) => {
  const response = await fetch(`${BASE_ACCOUNTS_URL}${username}`, {
    method: "GET",
    credentials: "include",
  })

  const data = await response.json()
  return data
}

export const getAccountFromAccountId = async (accountId) => {
  const response = await fetch(`${BASE_ACCOUNTS_URL}${accountId}`, {
    method: "GET",
    credentials: "include",
  })

  const data = await response.json()
  return data
}

export const createAccount = async (accountData) => {
  const response = await fetch(`${BASE_ACCOUNTS_URL}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(accountData),
  })

  const data = await response.json()
  return data
}

export const deleteAccount = async (accountId) => {
  const response = await fetch(`${BASE_ACCOUNTS_URL}${accountId}`, {
    method: "DELETE",
    credentials: "include",
  })

  const data = await response.json()
  return data
}
