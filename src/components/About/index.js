import React from 'react';
import Hero from '../Hero';
import './index.scss';

const About = () => {
  return (
   <div>
    <Hero heading='About me.' text='Enterprise BDR'/>
      <div className='about'>
          <div className='about-content'>
            <h1>Who Am I?</h1>
              <p>
                My name is Tyler Rodgers, and I’m a Business Development Rep based in Raleigh, NC. Right now I’m at Digital.ai, where in my first six months I’ve generated over $750K in pipeline and booked 20+ enterprise meetings with leaders like CISOs and VPs of Engineering.
              </p>
              <p>
                Before I moved into SaaS sales, I earned a certificate in Full Stack Web Development from UNC Chapel Hill. I don’t code day-to-day anymore, but having that background makes it easier to talk with technical buyers and understand how the products I’m selling actually work.
              </p>
              <p>
                I’ve had all kinds of jobs along the way. From running kitchens to managing a tire yard, and those taught me how to manage my time, lead a team, and stay adaptable. Those skills carry over into sales, where curiosity, persistence, and clear communication are what move the needle.
              </p>
              <p>
                These days I’m focused on helping SaaS companies grow through prospecting, pipeline generation, and building relationships with the right people. Long term, I’m excited about moving into customer success so I can keep working directly with customers and help them get the most out of the products they use.
              </p>
            <a href='https://www.dropbox.com/scl/fi/ct7h9chea58pd9isb0wte/Tyler-Rodgers-Resume-2025.docx?rlkey=m6mhydtcdbsbvqg9tqa00eriq&st=nxncmese&dl=00' target='_blank' rel='noreferrer' className='btn'>Download Resume</a>
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