import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import { AuthProvicer } from "./contexts/auth";

const AppRoutes = () => {
    return(
        <Router>
            <AuthProvicer>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </AuthProvicer>
        </Router>
    );
};

export default AppRoutes; 


