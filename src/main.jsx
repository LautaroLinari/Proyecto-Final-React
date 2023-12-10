import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import UserForm from './components/UserForm.jsx'
import Cobertura from './components/Cobertura.jsx'
import Footer from './components/Footer.jsx'
import './assets/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Renderizando todos los componentes */}
    <Nav />
    <Header />
    <Cobertura />
    <UserForm />
    <Footer />
    
  </React.StrictMode>,
)