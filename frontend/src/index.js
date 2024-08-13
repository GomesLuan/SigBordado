import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './funcionario';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/funcionario">Ir para Funcionário</Link>
          </li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>

      <Routes>
        <Route path="/funcionario" element={<App />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </div>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
