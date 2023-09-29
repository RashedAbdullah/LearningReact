import React, {useState} from 'react';
import Nested from './NestedMapping/Nested';
import ClassComp from './classComponent/ClassComp';
import IconsofReact from './React-icons/Icons';
import Bootstrap from './Bootstrap/Bootstrap';
import State from './States/state';
import MainPage from './ConditionalRendering/index';
import EventHandle from './EventHandling/EventHandle';
import Form from './Form/Form';
import Parent from './ChildToParentData/Parent';
import { BrowserRouter as Router } from 'react-router-dom';


const LearningReact = () => {

  

  return (

    <div className='Not'>
      <Router>
      <Parent />
      </Router>
    </div>
  )
}

export default LearningReact;