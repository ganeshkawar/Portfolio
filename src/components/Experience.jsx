import React from 'react';
import './Experience.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Experience = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="experience-container">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', color: 'black', flexShrink: 0 }}>
            Internship
          </Typography>
          <Typography>Pralhad P. Chhabria Research Center, Pune</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'black'}}>
          <Typography sx={{ color: 'white'}}>1<sup>st</sup> Jan 2024 - 1<sup>st</sup> March 2024</Typography>
          <Typography sx={{ color: 'white'}}>
          During my time at PPCRC, I learned about building websites using React, Node.js, and MUI
          components. It was a hands-on experience where I got to work on making web pages look nice and
          work well. I worked with a team of experienced people who taught me how to solve problems and
          make things better. This internship helped me get better at making websites and working with
          others.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%',color: 'black', flexShrink: 0 }}>Internship</Typography>
          <Typography sx={{ color: 'black' }}>QSpiders, Vashi New Mumbai.</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'black' }}>
          <Typography sx={{ color: 'white' }}>1<sup>st</sup> Jun 2024 - 1<sup>st</sup> Sept 2024</Typography>
          <Typography sx={{ color: 'white' }}>
          During my internship at QSpiders, I gained comprehensive knowledge and hands-on experience in web development. I worked extensively with technologies such as HTML, CSS, JavaScript, React, Java, and SQL. 
          This internship provided me with a solid foundation in both front-end and back-end development. I collaborated with a team of skilled professionals, which enhanced my problem-solving abilities and teamwork skills. 
          The experience was invaluable in improving my technical proficiency and understanding of real-world web development practices.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default Experience;