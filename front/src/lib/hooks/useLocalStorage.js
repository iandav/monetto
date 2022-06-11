import { useState, useEffect } from "react"

const useLocalStorage = (key, initialValue = null) => {
  const [storageValue, setStorageValue] = useState(() => {
    const storage = JSON.parse(localStorage.getItem(key))
    return storage ?? initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue))
  }, [storageValue])

  const setStorageValueWrapper = (value) => {
    const valueToStore = value instanceof Function ? value(storageValue) : value
    setStorageValue(valueToStore)
  }

  return [storageValue, setStorageValueWrapper]
}

export default useLocalStorage
