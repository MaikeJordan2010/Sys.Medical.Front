import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import './index.css'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { isAuthenticated } from './services/autenticacao';
import Rotas from "../router/routes";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Rotas />
)
