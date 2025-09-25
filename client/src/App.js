import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import User from './component/userform.js'
import Nev from './Component/Navbar/navbar.js'
import Footer from './Component/Footer/footer.js'
import Home from './Pages/Home/home.js'
import Project from './Pages/Project/project.js'
import Service from './Pages/Service/service.js'
import Contact from './Pages/Contact/contact.js'
import About from './Pages/About/about.js'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error fetching:', err));
  }, []);

  return (
    <BrowserRouter>
    <Nev/>
    <div>
       <Routes>
         <Route path="/" element={<Home/>}/>
             <Route path="/About" element={<About/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Contact" element={<Contact/>}/>
         </Routes>

         <Footer/>
      
  
    
    </div>
    </BrowserRouter>
  );
} export default App;