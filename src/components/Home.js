import React from 'react';
import pic from '../images/homeTop.jpg';
import diagonal from '../images/diagonal.png';
import Feature from './Feature';
import features from '../constants/features';

function Home() {
  return (
    <div style={{ position: 'relative' }}>
      
      <div className='purpleLinear'>
      <div className='home-top-div' style={{ zIndex: -3 }}>
        <div className='home-top-left'>
          <h1>Empowered</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus erat id erat tempus porta vitae non diam. Fusce a lorem cursus, accumsan leo sed, dictum leo. Nulla purus sem, consectetur nec magna eu, luctus aliquet metus. Integer lorem orci, efficitur vel ipsum id, eleifend sodales arcu. Mauris a quam finibus, vestibulum arcu non, aliquam eros. Donec posuere convallis mi, a bibendum lacus lobortis quis. Morbi pellentesque nibh ac commodo finibus. Suspendisse viverra dui congue lectus commodo, nec venenatis nulla ultricies. Morbi aliquet gravida est, non auctor augue maximus eu.</p>
          <button className='home-download'>Download</button>
        </div>
        <div className='home-top-right' style={{ position: 'relative' }}>
          <img className='home-img' src={pic} width="70%" style={{ zIndex: 2 }}/>
          <img
            className='home-img'
            src={diagonal}
            width="70%"
            style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1, borderColor: 'black', borderWidth : '100px' }}
          />
        </div>
      </div>

      <div className='centerText home-features'>
        <div className=' home-features-text'>
          <h1>Features</h1>
          <h4>Here are the features of our app</h4>
        </div>
        <div  className='features'>
          {features.map(feature => (
            <Feature key={feature.id} img={feature.img}  className='feature' />
         ))}
        </div>


      </div>

      </div>

      <div className='home-bottom-div' style={{ display: 'flex' }}>
        <div className='home-bottom-left' style={{ flex: 1 }}>
          <img className='home-img' src={pic} width="70%"/>
        </div>
        <div className='home-bottom-right' style={{ flex: 1 }}>
          <h1>Team Members</h1>
          <h4>Aliza Saleem Lakhani</h4>
          <h4>Batool Ahmed</h4>
          <h4>Haania Sidiqqui</h4>
          <h4>Hafsa Irfan</h4>
          <h4>Sadaf Shaikh</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
