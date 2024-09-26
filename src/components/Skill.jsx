import React from 'react'
import './Skill.css'
import { LinearProgress, Typography, Box } from '@mui/material';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 75 },
  { name: 'Next.js', level: 70 },
  { name: 'Python', level: 80 },
  { name: 'Java', level: 85 },
];

const Skill = () => {
  return (
    <div id="skill">
        <div className="skills-container">
          {skills.map((skill, index) => (
            <Box key={index} className="skill-box" mb={3}>
              <Typography variant="h6" className="skill-name">{skill.name}</Typography>
              <LinearProgress variant="determinate" value={skill.level} className="skill-progress" />
            </Box>
          ))}
        </div>
        <div id="img">
          <img src="./public/devloper.gif" alt="Coding gif" />
        </div>
    </div>    
  )
}

export default Skill