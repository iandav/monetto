import { useEffect, useReducer } from "react"
import useLocalStorage from "./useLocalStorage"

function reducer(state, action) {
  switch (action.type) {
    case "edit":
      return { ...state, editable: true }
    case "cancel":
      return { ...state, editable: false, errorMsg: "" }
    case "save":
      return { value: action.payload, editable: false, errorMsg: "" }
    case "error":
      return { ...state, errorMsg: action.payload }
    default:
      throw new Error(`Action type "${action.type}" does not exist`)
  }
}

export default function useSetting(key, inputElement) {
  const [storageValue, setStorageValue] = useLocalStorage(key)
  const [state, dispatch] = useReducer(reducer, {
    value: storageValue,
    editable: false,
    errorMsg: "",
  })

  useEffect(() => {
    if (state.editable) inputElement.current.focus()
  }, [state.editable])

  useEffect(() => {
    setStorageValue(state.value)
  }, [state.value])

  return [state, dispatch]
}
