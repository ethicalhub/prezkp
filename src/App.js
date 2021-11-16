import React from 'react'
import Header from './components/Layouts/Header'
import RegisterIdentity from './components/RegisterIdentity'
import ExternalNullifier from './components/ExternalNullifier'
import SignalHistory from './components/SignalHistory'
import backgroundImg from './components/assets/Images/background.png'
import './App.css'

const App = () => {
  return (
    <div style={{ backgroundImage:`${backgroundImg}`}}>
      <Header />
      <main>
        <RegisterIdentity />
       
        <ExternalNullifier />

        <SignalHistory />
      </main>
      
    </div>
  )
}

export default App
