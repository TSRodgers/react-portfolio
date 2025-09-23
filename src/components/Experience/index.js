import React from 'react';
import Hero from '../Hero';
import './index.scss';

const Experience = () => {
  return (
    <div>
      <Hero heading='Experience.' text='Enterprise BDR' />

      <div className='experience'>
        <div className='experience-content'>
          <h1>What I Do</h1>
          <p>
            I’m a Business Development Rep in Raleigh, NC focused on outbound prospecting,
            pipeline generation, and multi-threaded engagement for enterprise and mid-market SaaS.
            I pair high-volume activity with targeted messaging that speaks to both technical
            and executive buyers.
          </p>

          <h2>Highlights</h2>
          <ul className='bullets'>
            <li><strong>$752K</strong> in qualified pipeline created in 6 months (Digital.ai)</li>
            <li><strong>20+ enterprise meetings</strong> booked with CISOs, VPs of Engineering, QA leaders</li>
            <li><strong>80–100+ dials/day</strong> with multi-channel sequences (phone, email, LinkedIn)</li>
            <li>Partnered with AEs on <strong>Fortune 1000</strong> account strategy and outreach</li>
          </ul>

          <h2>Roles</h2>

          <div className='role'>
            <h3>Digital.ai — Business Development Representative</h3>
            <p className='meta'>Raleigh, NC • Mar 2025 – Present</p>
            <ul>
              <li>Generated <strong>$752K</strong> in qualified pipeline in 6 months across AppSec & Continuous Testing.</li>
              <li>Booked <strong>20+ enterprise meetings</strong> with CISOs, VPs Eng, QA leaders, DevSecOps.</li>
              <li>Designed multi-channel outreach that beat connection/conversion benchmarks.</li>
              <li>Maintained <strong>80–100+</strong> dials/day; balanced outbound and partner-sourced opportunities.</li>
            </ul>
          </div>

          <div className='role'>
            <h3>ProcessMaker — Sales Development Representative</h3>
            <p className='meta'>Raleigh, NC • Aug 2024 – Jan 2025</p>
            <ul>
              <li>Exceeded activity targets (80+ dials/day) while generating qualified meetings.</li>
              <li>Partnered with enterprise AEs to create pipeline and refine outreach.</li>
            </ul>
          </div>

          <div className='role'>
            <h3>REVGEN NC — Sales Development Representative</h3>
            <p className='meta'>Raleigh, NC • Apr 2024 – Jul 2024</p>
            <ul>
              <li>Booked <strong>5+ qualified meetings/week</strong> via cold calls and email outreach.</li>
              <li>Supported AE demos and follow-ups to advance opportunities.</li>
            </ul>
          </div>
        </div>

        <div className='xp-side'>
          <h1>Core Skills</h1>
          <div className='xp-tags'>
            <span className='tag'>Outbound</span>
            <span className='tag'>Prospecting</span>
            <span className='tag'>Cadences</span>
            <span className='tag'>Multi-threading</span>
            <span className='tag'>Discovery</span>
            <span className='tag'>Account Research</span>
            <span className='tag'>LinkedIn</span>
            <span className='tag'>Email</span>
            <span className='tag'>Cold Calling</span>
          </div>

          <h1 className='mt'>Technical Background</h1>
          <p className='tiny'>
            Full-Stack Web Development Certificate — UNC Chapel Hill.
          </p>
          <p>
            Experience with React, Node, MongoDB, MySQL, and GraphQL.
          </p>
          <p>
            This foundation helps me connect with developer buyers and translate product
            value into business outcomes.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;