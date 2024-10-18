import React from 'react'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Navbar from './components/Navbar'
import BlogDetail from './components/BlogDetail'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation(); // Get current path
  return (
  <>
    {location.pathname !== '/' && <Navbar />}
    <Routes>
          <Route path='/' element={<Page2 />} />
          <Route path='/blog' element={<Page3 />} />
          <Route path='/about' element={<Page4 />} />
          <Route path='/contact' element={<Page5 />} />

          <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  </>
  );
}

export default App;
