import React, { useState, useEffect, useRef } from "react"
import useLocalStorage from "../../lib/hooks/useLocalStorage"
import "./Settings.css"

const URL = "http://localhost:3000/api/user/update/password"

export default function PasswordSetting() {
  const inputElement = useRef(null)
  const [nick, _] = useLocalStorage("user")
  const [newPassword1, setNewPassword1] = useState("")
  const [newPassword2, setNewPassword2] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [editable, setEditable] = useState(false)

  function reset() {
    setEditable(false)
    setErrorMsg("")
    setNewPassword1("")
    setNewPassword2("")
  }

  async function submit() {
    if (!newPassword1 || !newPassword2) {
      setErrorMsg("Passwords cannot be blank.")
      return
    }

    if (!(newPassword1 === newPassword2)) {
      setErrorMsg("Passwords do not match.")
      return
    }

    const res = await fetch(URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ nick, newPassword: newPassword1 }),
    })

    if (res.ok) {
      reset()
    } else {
      const data = await res.json()
      setErrorMsg(data.message)
    }

    setNewPassword1("")
    setNewPassword2("")
  }

  const buttons = editable ? (
    <>
      <button
        className="setting__btn setting__btn--save"
        type="submit"
        onClick={submit}
        disabled={!editable}
      >
        Submit
      </button>
      <button
        className="setting__btn setting__btn--cancel"
        type="button"
        onClick={reset}
        disabled={!editable}
      >
        Cancel
      </button>
    </>
  ) : (
    <button
      className="setting__btn password-setting__btn--edit"
      type="button"
      onClick={() => setEditable(true)}
      disabled={editable}
    >
      Change Password
    </button>
  )

  const passwordFields = editable ? (
    <>
      <label
        className="setting__label password-setting__label--primary"
        htmlFor="newPassword1"
      >
        New Password
        <input
          ref={inputElement}
          className="setting__input"
          type="password"
          name="newPassword1"
          value={newPassword1}
          disabled={!editable}
          onChange={(e) => setNewPassword1(e.target.value)}
        />
      </label>
      <label
        className="setting__label password-setting__label--secondary"
        htmlFor="newPassword2"
      >
        Confirm New Password
        <input
          className="setting__input"
          type="password"
          name="newPassword2"
          value={newPassword2}
          disabled={!editable}
          onChange={(e) => setNewPassword2(e.target.value)}
        />
      </label>
    </>
  ) : (
    <label
      className="setting__label password-setting__label--primary"
      htmlFor="password"
    >
      Password
      <input
        className="setting__input"
        type="text"
        name="password"
        value="******"
        disabled
      />
    </label>
  )

  return (
    <div className="setting password-setting">
      {passwordFields}
      {buttons}
      <span className="setting__error password-setting__error">{errorMsg}</span>
    </div>
  )
}
