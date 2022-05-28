import React from "react"
import reactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import { RegisterPage } from "./pages"
import { LoginPage } from "./pages"
import { DashboardPage } from "./pages"
import { AuthProvider, RequireAuth } from "./lib/auth"
import "./global.css"

const node = document.getElementById('root')
const root = reactDOM.createRoot(node)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/dashboard" 
                        element= {
                            <RequireAuth>
                                <DashboardPage />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)