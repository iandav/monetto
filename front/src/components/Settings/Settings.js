import React from "react";
// Styles
import "./Settings.css"

function Settings() {
    return(
        <div className="settingsContainer">

            <label htmlFor="username">Username</label>
            <div>
            <input type="text" name="username" value="John Wick" disabled></input>
            <button className="edit-btn">Edit</button>
            </div>

            <label htmlFor="email">Email</label>
            <div>
            <input type="email" name="email" value="johnwick@gmail.com" disabled></input>
            <button className="edit-btn">Edit</button>
            </div>

            <label htmlFor="password">Password</label>
            <div>
            <input type="password" name="password" value="password" disabled></input>
            <button className="edit-btn">Change</button>
            </div>




        </div>
    );
}

export default Settings;