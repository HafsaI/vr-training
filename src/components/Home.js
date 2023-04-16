import React from 'react';
import pic from '../images/homeTop.jpg';
import Feature from './Feature';
import features from '../constants/features';

function Home() {
  return (
    <div>
      <div className='home-top-div'>
        <div className='home-top-left'>
          <p>About The projectdjjsdjsmd,skdmsd
Download our public speaking guide and practise.</p>
          <button className='home-download'>Download</button>
        </div>
        <div className='home-top-right'>
          <img className='home-img' src={pic} width="70%"/>
        </div>
      </div>

      <div className='home-features'>
        <div className='centerText home-features-text'>
          <h1>Features</h1>
          <h4>Here are the features of our app</h4>
          <div style={{ display: 'flex' }}>
            {features.map(feature => (
              <Feature key={feature.id} img={feature.img} style={{ display: 'inline-block', margin: '0 10px' }} />
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
