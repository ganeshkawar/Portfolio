import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav id='nav'>
        {/* <img src="./public/ganeshLogo.png" alt="Ganesh Logo" id='gkLogo' />
        <div className='firstP'>
          <Link to="/" className='firstP'>Home</Link>
          <Link to="/about" className='firstP'>About</Link>
          <Link to="/education" className='firstP'>Education</Link>
          <Link to="/experience" className='firstP'>Experience</Link>
        </div>   */}

        <img src="./public/ganeshLogo.png" alt="Ganesh Logo" id='gkLogo' />
        {!drawerOpen && <DensityMediumIcon className='menu-icon' onClick={toggleDrawer} />}
        {drawerOpen && <CloseIcon className='close-icon' onClick={toggleDrawer} />}
        <div className={`firstP ${drawerOpen ? 'open' : ''}`}>
          <Link to="/" className='firstP' onClick={toggleDrawer}>Home</Link>
          <Link to="/about" className='firstP' onClick={toggleDrawer}>About</Link>
          <Link to="/education" className='firstP' onClick={toggleDrawer}>Education</Link>
          <Link to="/experience" className='firstP' onClick={toggleDrawer}>Experience</Link>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar