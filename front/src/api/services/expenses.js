const BASE_EXPENSES_URL = "http://localhost:3000/api/expense/"

export const getExpensesFromUser = async (username, dateFrom, dateTo) => {
  const response = await fetch(
    `${BASE_EXPENSES_URL}user/${username}?dateFrom=${dateFrom}&dateTo=${dateTo}`,
    {
      method: "GET",
      credentials: "include",
    }
  )

  const data = await response.json()
  return data
}

export const getExpensesFromAccountId = async (accountId) => {
  const response = await fetch(`${BASE_EXPENSES_URL}${accountId}`, {
    method: "GET",
    credentials: "include",
  })

  const data = await response.json()
  return data
}

export const addExpenseToAccount = async (expenseData) => {
  const response = await fetch(`${BASE_EXPENSES_URL}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expenseData),
  })

  const data = await response.json()
  return data
}

export const deleteExpenseFromAccount = async (accountId) => {
  const response = await fetch(`${BASE_EXPENSES_URL}${accountId}`, {
    method: "DELETE",
    credentials: "include",
  })

  const data = await response.json()
  return data
}
