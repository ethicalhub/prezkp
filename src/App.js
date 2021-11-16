import React from 'react'
import Header from './components/Layouts/Header'
import RegisterIdentity from './components/RegisterIdentity'
import ExternalNullifier from './components/ExternalNullifier'
import SignalHistory from './components/SignalHistory'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <hr />
      <main>
        <RegisterIdentity />
        <hr />
        <ExternalNullifier />
        <hr />
        <SignalHistory />
      </main>
      
    </div>
  )
}

export default App
