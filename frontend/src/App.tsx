import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/loginSignUp/Login'
import Profile from './pages/ProfileUpdate/Profile'
import Chats from './pages/chats/Chats'
import Varification from './pages/registerVarify/Varification'

const App: React.FC = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/varification/chats' element={<Chats />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/varification' element={<Varification />} />

      </Routes>
    </div>
  )
}

export default App
