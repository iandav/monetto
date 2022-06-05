import React from "react"
import "./Settings.css"

function Settings() {
  return (
    <div className="settingsContainer">
      <label htmlFor="username">
        Username
        <div>
          <input type="text" name="username" value="John Wick" disabled />
          <button type="button" className="edit-btn">
            Edit
          </button>
        </div>
      </label>

      <label htmlFor="email">
        Email
        <div>
          <input
            type="email"
            name="email"
            value="johnwick@gmail.com"
            disabled
          />
          <button type="button" className="edit-btn">
            Edit
          </button>
        </div>
      </label>

      <label htmlFor="password">
        Password
        <div>
          <input type="password" name="password" value="password" disabled />
          <button type="button" className="edit-btn">
            Change
          </button>
        </div>
      </label>
    </div>
  )
}

export default Settings
