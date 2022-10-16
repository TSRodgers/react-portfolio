import React, { useEffect } from 'react'
import HeroImg from '../../assets/images/heroimg.jpg';
import './index.css'

const Home = (props) => {
  const {
    setCurrentPage,
    currentPage,
  } = props;
  
  const heroPages = [
    { name: 'Projects' },
    { name: 'Contact' }
  ];

  useEffect(() => {
    document.title = currentPage.name
  });

  return (
    <div>
      <div className='hero'>
        <div className='mask'>
          <img className='hero-img' src={HeroImg} alt='HeroImg' />
        </div>
        <div className='content'>
          <p>Hi, I'm Tyler Rodgers</p>
          <h1>Full-Stack Developer.</h1>
          <ul>
            {heroPages.map((page) => (
          <li 
            className={`btn ${
              currentPage.name === page.name
            }`}
            key={page.name}
          >
            <span 
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page.name}
            </span>
          </li>
        ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home;