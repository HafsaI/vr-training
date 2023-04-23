import React from 'react';
import pic from '../images/homeTop.jpg';
// import oculus from '../images/oculus2.png'
// find white picture
import oculus from '../images/oculus.png'
import diagonal from '../images/diagonal.png';
import Feature from './Feature';
import TeamMember from './TeamMember';
import features from '../constants/features';

function Home() {
  return (
    <div>
          
  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">(Slogan)</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">Download our public speaking guide here</h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <a href="#about" className="btn-get-started scrollto" style={{textDecoration:"none"}}>Download</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          <img src={oculus} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>

  <main id="main">

    <section id="about" className="about">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="150">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>

        </div>

      </div>
    </section>

    
    <section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
        </div>

        <div className="row" >
        {features.map(feature => (
          <Feature key={feature.id} title={feature.title}/>
       ))}

        </div>

      </div>
    </section>

    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Here's the team that made it all possible</p>
        </div>

        <div className="row" style = {{justifyContent:'center', paddingBottom:'5%'}}>
          <TeamMember pic = {pic} name = 'Aliza Saleem Lakhani'/>
          <TeamMember pic = {pic} name = 'Batool Ahmed'/>
          <TeamMember pic = {pic} name = 'Haania Siddiqui'/>
          <TeamMember pic = {pic} name = 'Hafsa Irfan'/>
          <TeamMember pic = {pic} name = 'Sadaf Shaikh' major = 'ECE'/>
        </div>

      </div>
    </section>

  </main>

    </div>
  );
}

export default Home;
