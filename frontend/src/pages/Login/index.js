import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Login({ history }) {
  return (
    <div className="login-container">
      <header>
        <h1>BANCO DE TALENTOS</h1>
      </header>

      <form>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="seu e-mail" />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="sua senha"
        />
        <a href="#" className="btn">
          Entrar
        </a>
      </form>
    </div>
  );
}
