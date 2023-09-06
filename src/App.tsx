import { Link, Routes, Route } from 'react-router-dom'
import Stackblack from './assets/Stackblack.png'
import Home from './Components/Home/Home'
import SmartThings from './Components/SmarthThings/SmartThings'
import './App.css'
import Moviles from './Components/Moviles/Moviles'
import Laptops from './Components/TvAudio/Laptops'
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <>
      <header className='navbar w-full fixed z-20 shadow-xl'>
        <nav className='flex h-14 items-center justify-around font-navbar'>
          <figure className='flex justify-center w-40'>
            <img className='w-24' src={Stackblack} alt="" />
          </figure>
          <ul className='flex items-center text-black gap-x-10 text-xl'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/moviles'>Móviles</Link></li>
            <li><Link to='/laptops' >Laptops</Link></li>
            <li><Link to='/smart-things' >SmartThings</Link></li>
          </ul>
          <section className='flex gap-x-6 items-center'>
            <button className='navbar-btn h-12 w-36 text-white'>SING UP / LOG IN</button>
            <FiSearch className='text-black text-3xl font-bold' />
          </section>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/moviles' element={<Moviles />} ></Route>
        <Route path='/laptops' element={<Laptops />} ></Route>
        <Route path='/smart-things' element={<SmartThings />} ></Route>
      </Routes>
    </>
  )
}

export default App
