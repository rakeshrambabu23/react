import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import Home from './Home'
import Products from './Products'
import { useState } from 'react'
import  './style.css'
import './App.css'


function App() {    
  
                    const [toggle, setToggle] = useState(true)    
                    const Toggle = () => 
                    {        setToggle(!toggle)    } 
                  
return (    
<Router>
<div className='container-fluid bg-secondary min-vh-100 '>       
<div className='row '>            
    {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>               
 <Sidebar />            
    </div>}           
     {toggle &&  <div className='col-4 col-md-2'></div>}            
        <div className='col'> 
        <Routes>
            
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
            
            </Routes>
           <Home Toggle={Toggle}/>           
     </div>        
    </div>    
  </div> 
  </Router>
   )
}
export default App