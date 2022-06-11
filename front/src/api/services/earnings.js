const BASE_EARNINGS_URL = "http://localhost:3000/api/earning/"

export const getEarningsFromUser = async (username) => {
  const response = await fetch(`${BASE_EARNINGS_URL}user/${username}`, {
    method: "GET",
    credentials: "include",
  })
  const data = await response.json()
  return data
}

export const getEarningsFromAccountId = async (accountId) => {
  const response = await fetch(`${BASE_EARNINGS_URL}${accountId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()
  return data
}

export const addEarningToAccount = async (earningData) => {
  const response = await fetch(`${BASE_EARNINGS_URL}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(earningData),
  })

  const data = await response.json()
  return data
}

export const deleteEarningFromAccount = async (accountId) => {
  const response = await fetch(`${BASE_EARNINGS_URL}${accountId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()
  return data
}
