import React from 'react'
import './Projects.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Projects = () => {
  return (
    <main>
    <div class = "card">
    <img src="./evently.png" alt="evently" />
    <div class="card-content">
      <h2>
        Evently
      </h2>
      <Typography sx={{color:'black'}} >Platform : ReactJS, NextJS, NodeJS, Clerk, Typescript, MongoDB</Typography>
      <a href="#">
      <Typography>
      <Button   endIcon={<ArrowRightAltIcon />} href='https://evently-git-main-ganesh-kawars-projects.vercel.app/'>See_More</Button>
      </Typography>
      </a>
    </div>
  </div>
  <div className='certificate'>
    
  </div>
  </main>
  )
}

export default Projects