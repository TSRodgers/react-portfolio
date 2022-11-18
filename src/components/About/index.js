import React from 'react';
import Hero from '../Hero';
import './index.scss';

const About = () => {
  return (
   <div>
    <Hero heading='About me.' text='Aspiring Full-Stack Developer'/>
      <div className='about'>
          <div className='about-content'>
            <h1>Who Am I?</h1>
              <p>
                My name is Tyler Rodgers, and I am a Full-Stack Developer. I attended Appalachian State University in Boone, North Carolina, for four years. After numerous times of changing to various healthcare-related majors, I decided it was time to take a step back and genuinely figure out what I wanted to do. During this time, I have had several work roles ranging from line cook to yard manager of a commercial tire company. These experiences have effectively taught me vital soft-skills such as time management, attention to detail, leadership, as well as teamwork.
              </p>
              <p>
                With addition to being naturally driven, curious and a problem solver, I aim to use these skills to provide meaningful solutions and high quality customer facing applications. I've recently earned a certificate in Full Stack Web Development from the University of North Carolina, Chapel Hill. With the skills I've accquired, I have set out to grow my potential as a developer. To do so, I am currently working through Havard Universities free CS50 course to strengthen my fundamentals as well as consistently working on new projects and breaking out of my comfort zone by implementing technologies and languages I'm not familiar with.
              </p>
              <p>
                Excited by the possibilities and challenges offered by this industry, I'm seeking entry-level oppprtunities, with the goal to work alongside seasoned tech professionals to continuously grow and expand my skillset.  
              </p>
            <a href='https://www.dropbox.com/s/j3o0piu85hie31n/Tyler%20Rodgers%20-%20Resume%20%281%29.pdf?dl=0' target='_blank' rel='noreferrer' className='btn'>Download Resume</a>
          </div>
        <div className='tech'>
          <h1>Technologies</h1>
          <div className='tech-icons'>
            <img src='https://img.icons8.com/color/70/javascript--v1.png' alt='js-icon'/>
            <img src='https://img.icons8.com/color/70/html-5--v1.png' alt='html-icon'></img>
            <img src='https://img.icons8.com/color/70/css3.png' alt='css-icon'></img>
            <img src='https://img.icons8.com/color/70/react-native.png' alt='react-icon'></img>
            <img src='https://img.icons8.com/small/70/nodejs.png' alt='node-icon'></img>
            <img src='https://img.icons8.com/color/70/mongodb.png' alt='mongo-icon'></img>
            <img src='https://img.icons8.com/color/70/graphql.png' alt='graphql-icon'></img>
            <img src='https://img.icons8.com/color/70/my-sql.png' alt='mysql-icon'></img>
            <img src='https://img.icons8.com/fluency/70/handlebar-mustache.png' alt='handlebars-icon'></img>
            <img src='https://img.icons8.com/color/70/visual-studio-code-2019.png' alt='vscode-icon'></img>
            <img src='https://img.icons8.com/color/70/github.png' alt='github-icon'></img>
            <img src='https://img.icons8.com/color/70/git.png' alt='git-icon'></img>
            <img src='https://img.icons8.com/color/70/heroku.png' alt='heroku-icon'></img>
          </div>
        </div>
      </div> 
   </div>
  )
}

export default About