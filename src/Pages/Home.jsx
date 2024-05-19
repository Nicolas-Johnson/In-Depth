import React from 'react'
import headshot from '../assets/img/headshot.jpg'
import react from '../assets/img/'


const Home = () => {
  return (
    <main className='home'>
      <section className="hero">
        <section className="wrapper">
          <article className='hero-info'>
            <h1>Web Design & Developer</h1>
            <h2>Premium Web Developer & Design, Product 3D assets and SEO services to help your business stand out.</h2>
          </article>
          <article className='hero-img'>
            {/* <img src={headshot} alt="My AI generated HeadShot, very realistic, Based on a picture of myne" /> */}
          </article>
        </section>        
      </section>
      <section className='tools'>
        <marquee className="wrapper" direction="left">
          <img src="" alt="" />
        </marquee>
      </section>
    </main>
  )
}

export default Home