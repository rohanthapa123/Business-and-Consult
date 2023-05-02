
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ThankYou from './Pages/ThankYou'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import NavbarComponent from './Components/NavbarComponent'
import About from './Pages/About'
import Webinar from './Pages/Webinar'
import Pricing from './Pages/Pricing'
import Services from './Pages/Services'


function App() {

  return (
    <Routes>

      <Route path='/home' element={<Home active="home"/>}/>
      <Route path='/contact' element={<Contact active="contact"/>} />
      <Route path='/about' element={<About active="about"/>} />
      <Route path='/webinar' element={<Webinar active="webinar"/>} />
      <Route path='/pricing' element={<Pricing active="pricing"/>} />
      <Route path='/service' element={<Services active="service"/>} />

      <Route path='/thanks' element={<ThankYou/>}/>
    </Routes>
  )
}

export default App
