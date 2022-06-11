import { useState } from "react"

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState)

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return [formData, onInputChange]
}

export default useForm
