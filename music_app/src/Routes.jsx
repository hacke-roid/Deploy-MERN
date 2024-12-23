import React from 'react'
import Main from './Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './Register';

const Routers = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </Router>
  )
}

export default Routers
