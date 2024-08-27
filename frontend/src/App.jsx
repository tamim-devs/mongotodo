import React, { useState } from 'react'
import Blog from './component/Blog'
import Allblog from './component/Allblog'

const App = () => {
  const [realtime , setrealtime] = useState(false);
  const makeRealtime = ()=>{
    setrealtime(!realtime);
  }
  return (
   <div className='flex justify-around py-10'>
    <Blog raltime = {makeRealtime}/>
    <Allblog observerState = {realtime}/>
   </div>
  )
}

export default App