import React, { useContext } from 'react'
import adduser from '../img/adduser.png'
import zoom from '../img/zoom.png'
import option from '../img/option.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from './context/ChatContext'

const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={zoom} alt="" />
          <img src={adduser} className='adduser' alt="" />
          <img src={option} alt="" />
        </div>
      </div>
      <div>
        <Messages/>
        <Input/>
      </div>
    </div>
  )
}

export default Chat
