import React from 'react'
import Navigations from './Navigations';
import Chats from './Chats';
import SingleChat from './SingleChat';

const Home = () => {
  return (
    <div className='msnger'>
        <Navigations/>
        <Chats/>
        <SingleChat/>
    </div>
  )
}

export default Home