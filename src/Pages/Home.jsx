import React, { useContext } from 'react'
import react from '../assets/img/react.svg';
import next from '../assets/img/next.svg';
import node from '../assets/img/node.svg';
import aws from '../assets/img/aws.svg';
import docker from '../assets/img/docker.svg';
import shopify from '../assets/img/shopify.svg';
import { DataContext } from '../Hooks/useContext';



const Home = () => {
  const {data} = useContext(DataContext);
  
  const henderServiceCards = () => {
    console.log(data.blogs)
  };
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
        <marquee className="wrapper" vspace='0' direction="left" truespeed="true" scrolldelay='60'>
          <img className='big' src={react} alt="react icon" />
          <img className='big' src={node} alt="node icon" />
          <img src={next} alt="next icon" />
          <img src={aws} alt="aws icon" />
          <img className='small' src={docker} alt="docker icon" />
          <img className='small' src={shopify} alt="shopify icon" />
          <img className='big' src={react} alt="react icon" />
          <img className='big' src={node} alt="node icon" />
          <img src={next} alt="next icon" />
          <img src={aws} alt="aws icon" />
          <img className='small' src={docker} alt="docker icon" />
          <img className='small' src={shopify} alt="shopify icon" />
          <img className='big' src={react} alt="react icon" />
          <img className='big' src={node} alt="node icon" />
          <img src={next} alt="next icon" />
          <img src={aws} alt="aws icon" />
          <img className='small' src={docker} alt="docker icon" />
          <img className='small' src={shopify} alt="shopify icon" />
        </marquee>
      </section>
      <section className="services">
        <section className="wrapper">
          <article className='services-info'>
            <h5>Services</h5>
            <h2>Design, Development, and Content. All-in-one.</h2>
            <p>Take your online presence to the next level with my expert web design and content creation services.</p>
          </article>
          <article className='services-services'>
            <div className="service">
              <button
              onClick={henderServiceCards}>data</button>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Home