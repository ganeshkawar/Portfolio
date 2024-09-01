import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
        <div id='myHome'>
            <div className='div'>
                <p id="first_para">Hello everyone, <span id='gkText'>I'm Ganesh Kawar</span></p>
                <p id="second_para">I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Java, HTML,CSS, React.js, and Next.js. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.</p>
            </div>
            <div className='div'>
                <img src="./public/ganeshkawar2.jpg" alt="Ganesh Img" id='gkimg' />
            </div>
        </div>
    </>
  )
}

export default Home