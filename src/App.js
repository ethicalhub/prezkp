import React from 'react'
import Header from './components/Layouts/Header'
import RegisterIdentity from './components/RegisterIdentity'
import ExternalNullifier from './components/ExternalNullifier'
import SignalHistory from './components/SignalHistory'
import backgroundImg from './components/assets/Images/background.png'
import './App.css'

const App = () => {
  return (
    <div>
      <picture class="image-cover cover">
        <source type="image/png" data-srcset="/static/media/background.cb81e314.png" />
        <img data-src={backgroundImg} alt="" class="loaded" src={backgroundImg} data-was-processed="true" />
      </picture>  



<div className="overlay">
      <Header />
      <main >
    
        <RegisterIdentity />
       
        <ExternalNullifier />

        <SignalHistory />
      </main>
      </div>
    </div>
  )
}

export default App
