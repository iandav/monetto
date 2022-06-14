import React from "react"
import reactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  Home,
  RegisterPage,
  LoginPage,
  DashboardPage,
  SettingsPage,
  EarningsPage,
} from "./pages"
import RequireAuth from "./lib/hoc/RequireAuth"
import "./global.css"

const node = document.getElementById("root")
const root = reactDOM.createRoot(node)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      />
      <Route path="/earnings" element={<EarningsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  </BrowserRouter>
)
