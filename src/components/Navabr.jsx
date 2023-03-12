import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const Navabr = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className="logo">
        Web Chat
      </span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>navigate('/login')}>Logout</button>
      </div>
    </div>
  )
}

export default Navabr
