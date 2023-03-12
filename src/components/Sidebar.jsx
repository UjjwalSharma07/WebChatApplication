import React from 'react'
import Chats from './Chats'
import Navabr from './Navabr'
import Search from './Search'

const Sidebar = () => {
 
  return (
    <div className='sidebar'>
      <Navabr/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar;
