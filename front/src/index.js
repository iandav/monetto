import React from "react"
import reactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage, DashBoardPage, LandingPage } from "./pages"
import { AuthProvider } from "./utils/providers/AuthContext"
import { RequireAuth } from "./api/auth"
import "./index.css"

const node = document.getElementById('root')
const root = reactDOM.createRoot(node)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider> 
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/dashboard" 
                        element= {
                            <RequireAuth>
                                <DashBoardPage />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)