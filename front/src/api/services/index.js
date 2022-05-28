//Here we manage api calls to the backend

// Store the username of the current user
export const username = sessionStorage.getItem("user")

// Get user earnings
export const getEarnings = async () => {
    await fetch(`http://localhost:3000/api/earning/user/${username}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(response => {
    return response.json()
})
.then(result => {
    console.log(result)
    return result
})
}
