import React from 'react'
import './Education.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';


const Education = () => {
  return (
    <>
      <Box
        className="box" 
      sx={{
        display: 'flex',
        justifyContent:'space-around',        
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 450,
          height: 350,
        },
      }}
    >
      <div>
        <Card sx={{ maxWidth: 355, borderRadius: '8px'}}>
          <CardActionArea>
            <CardMedia className='img'
              component="img"
              height="120px"
              image='./ibsar.png'
              alt="ibsar"
            />
            <CardContent sx={{ backgroundColor:'black' }}>
              <Typography gutterBottom variant="h5" component="div" color={'white'}>
                Bachelor of Computer Application
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>  
                2021 - 2024
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }} style={{paddingBottom:60}}> 
              Graduated with a Bachelor of Computer Applications (BCA), specializing in software development.   
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 355, borderRadius: '8px'}}>
          <CardActionArea>
            <CardMedia className='img'
              component="img"
              height="120px"
              image='./bdc.png'
              alt="ibsar"
            />
            <CardContent sx={{ backgroundColor:'black' }}>
              <Typography gutterBottom variant="h5" component="div" color={'white'}>
               Higher Secondary School Certificate
              </Typography>
              <Typography variant="body2" sx={{ color:'white' }}>  
                2020 - 2021
              </Typography>
              <Typography variant="body2" sx={{ color: 'white'}} style={{paddingBottom:28}}> 
                Completed Higher Secondary Certificate (HSC) in Commerce, focusing on subjects like accounting, economics, business studies.   
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 355, borderRadius: '8px'}}>
          <CardActionArea>
            <CardMedia  className='img'
              component="img"
              height="120px"
              image='./kdbj.jpg'
              alt="ibsar"
            />
            <CardContent sx={{ backgroundColor:'black' }}>
              <Typography gutterBottom variant="h5" component="div" color={'white'}>
               Secondary School Certificate
              </Typography>
              <Typography variant="body2" sx={{ color:'white' }}>  
                2018 - 2019
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }} style={{paddingBottom:25}}> 
              Completed secondary education with a focus on science and mathematics. Actively participated in school science fairs and extracurricular activities, achieving excellent academic results.   
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Box>
    </>
  )
}

export default Education




