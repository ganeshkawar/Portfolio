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
        <img src="./public/ganeshLogo.png" alt="Ganesh Logo" id='gkLogo' />
        {!drawerOpen && <DensityMediumIcon className='menu-icon' onClick={toggleDrawer} />}
        {drawerOpen && <CloseIcon className='close-icon' onClick={toggleDrawer} />}
        <div className={`firstP ${drawerOpen ? 'open' : ''}`}>
          <Link to="/" className='firstP' onClick={toggleDrawer}>About</Link>
          <Link to="/Skill" className='firstP' onClick={toggleDrawer}>Skills</Link>
          <Link to="/education" className='firstP' onClick={toggleDrawer}>Education</Link>
          <Link to="/projects" className='firstP' onClick={toggleDrawer}>Projects</Link>
          {/* <Link to="/experience" className='firstP' onClick={toggleDrawer}>Experience</Link> */}
        </div>
      </nav>
      
    </>
  )
}

export default Navbar