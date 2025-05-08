import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import { isAuthenticated } from "../src/services/autenticacao";



export function Rotas() {
  const [logado, setLogado] = useState(false)

  useEffect(() => {
    async function teste() {
      const autenticacao = await isAuthenticated();

      if (autenticacao) {
        setLogado(true);
      }
    }

    teste()
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={true ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas;