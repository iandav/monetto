import React, { useState, useEffect, useRef } from "react"
import SettingError from "./SettingError"
import useSetting from "../../lib/hooks/useSetting"
import "./Settings.css"

export default function TextSetting({ label, storageKey, callback = null }) {
  const inputElement = useRef(null)
  const [setting, settingDispatch] = useSetting(storageKey, inputElement)
  const [input, setInput] = useState(setting.value)

  async function save() {
    if (input === setting.value) {
      settingDispatch({ type: "cancel" })
      return
    }

    try {
      const newValue = callback ? await callback(input, setting.value) : value
      settingDispatch({ type: "save", payload: newValue })
    } catch (err) {
      if (err instanceof SettingError) {
        settingDispatch({ type: "error", payload: err.message })
      } else {
        settingDispatch({ type: "error", payload: "Something went wrong." })
        console.error(err)
      }
    }
  }

  function cancel() {
    settingDispatch({ type: "cancel" })
    setInput(setting.value)
  }

  function edit() {
    settingDispatch({ type: "edit" })
  }

  const buttons = setting.editable ? (
    <>
      <button
        className="setting__btn setting__btn--save"
        type="button"
        onClick={save}
        disabled={!setting.editable}
      >
        Save
      </button>
      <button
        className="setting__btn setting__btn--cancel"
        type="button"
        onClick={cancel}
        disabled={!setting.editable}
      >
        Cancel
      </button>
    </>
  ) : (
    <button
      className="setting__btn setting__btn--edit"
      type="button"
      onClick={edit}
      disabled={setting.editable}
    >
      Edit
    </button>
  )

  return (
    <div className="setting">
      <label className="setting__label" htmlFor="setting-input">
        {label}
        <input
          className="setting__input"
          ref={inputElement}
          type="text"
          name="setting-input"
          value={input}
          disabled={!setting.editable}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      {buttons}
      <span className="setting__error">{setting.errorMsg}</span>
    </div>
  )
}
