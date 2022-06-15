import React, { useState, useEffect, useRef } from "react"
import useLocalStorage from "../../lib/hooks/useLocalStorage"

import TextSetting from "./TextSetting"
import PasswordSetting from "./PasswordSetting"
import SettingError from "./SettingError"
import "./Settings.css"

async function fetchUsernameChange(newNick, currentNick) {
  const url = "http://localhost:3000/api/user/update/username"
  const res = await fetch(url, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ nick: currentNick, newNick: newNick }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
  const data = await res.json()

  if (!res.ok) {
    throw new SettingError(data.message)
  }

  return newNick
}

export default function Settings() {
  return (
    <div className="settings-container">
      <TextSetting
        label="Username"
        storageKey="user"
        callback={fetchUsernameChange}
      />
    </div>
  )
}
