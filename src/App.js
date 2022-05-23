import React from 'react'
import Slider from './components/Slider/Slider'
import { Route, Routes } from 'react-router-dom';
import Comments from './components/Comments/Comments';




const App = () => {
    return (
        <div>
            <Routes>
                <Route  path='/' element={<Slider />}/>
                <Route  path='/post/:uuid' element={<Comments/>}/>
            </Routes>
            
      </div>
  )
}

export default App
