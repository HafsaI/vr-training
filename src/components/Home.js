import React from 'react';
import pic from '../images/homeTop.jpg';
import oculus from '../images/oculus2.png'
import bg from '../images/bg.png'
import screens from '../images/screens.png'
import app from '../images/app_2.png'
import Feature from './Feature';
import TeamMember from './TeamMember';
import features from '../constants/features';
import Guide from '../images/ps_guide.pdf';
import batool from '../images/batool.png'
import haania from '../images/haania.png'
import aliza from '../images/aliza.png'
import hafsa from '../images/hafsa.png'
import sadaf from '../images/sadaf.png'

function Home() {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop:'0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" className="home-header-center home-heading">Manifest your voice</h1>
              <h2 data-aos="fade-up" data-aos-delay="400" className="home-header-center">Download our public speaking guide here</h2>
              <div data-aos="fade-up" data-aos-delay="800" className=" download-div home-header-center">
                <a className="btn-get-started scrollto" href={Guide} target="_blank" rel="noreferrer" style={{textDecoration:"none", color: 'white'}}>Download</a>
              </div>
            </div>
            <div className="screens col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200" style={{marginTop : '5%'}}>
              <img src={screens} className="img-fluid animated" alt=""/>
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
            <p className='about-content'>
              You have an interview tomorrow and you know that if you mess up, you'll lose the job oppurtunity. You have a presentation tomorrow and you know that if you don't present well, you'll lose a lot of marks. You have a meeting tomorrow and you know that if you're not able to convey your message well, you'll lose potential clients. We understand you and we are here to help you. 
              <br/>
              <strong>Manifest</strong> is a public speaking training app that lets <strong>you</strong> practice and analyze your speeches. Manifest's aim is to make sure that in every conversation, in every conference, in every interview, in every meeting, and in every speech, you manifest what you desired to.
              <br/>We are available both as a virtual reality app and as a standalone analysis solution. In the VR app, you are placed in a conference room with audience and you can give your speech there. The system provides you with a fine-grained analysis of your speech, posture and nervousness so that you know exactly what you have to improve upon.
            </p>
          </div>

        </div>

      </div>
    </section>

    
    <section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>These are some of the features that make our app unique</p>
        </div>

        <div className="row" >
        {features.map(feature => (
          <Feature key={feature.id} title={feature.title} icon='bx bx-dribble' description={feature.description} isAnalysis = {feature.isAnalysis}/>
       ))}

        </div>

      </div>
    </section>

    <section id="team" className="team">
      <div className="container">

        <div className="section-title more-details" data-aos="fade-up">
          <h2>More Details</h2>
          <p>Here are the analysis criteria in depth</p>
        </div>

        <div className="row" style = {{justifyContent:'center', paddingBottom:'5%'}}>

        <div id="speech-detail" className="col-lg-12 col-md-6 d-flex align-items-stretch">
          <div data-aos="fade-up" data-aos-delay="300">
            <div className='detail-info'>
              <h4 style={{textAlign:'center'}}>Speech Analysis</h4>
              
              <h5>Pauses</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>The Number of Pauses is a metric that quantifies the number of pauses in an audio signal. This is determined by identifying periods of silence that exceed a certain threshold duration within the audio signal.</h6></div>
            
              <h5>Speaking Rate</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>The Speaking Rate, or Speech Rate Score, is a measure of the number of syllables pronounced per second in an audio signal. This score provides insight into the pace at which speech is delivered.</h6></div>
            
              <h5>Clarity</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>The Clarity Score is a measure of the articulation rate of an audio signal. It calculates the number of pronounced syllables per second, excluding pauses, in the audio signal. This score provides insight into the speaker's clarity of speech.</h6></div>
            
              <h5>Pronunciation</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>The Pronunciation Score is a measure of the number of pronounced syllables in an audio signal. It is computed by detecting the number of vocalic segments in the audio signal.</h6></div>
            
              <h5>Listenability</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>The Listenability Score provides an indication of the comprehensibility of speech. It uses the Flesch Reading Ease algorithm which determines whether the text is easy to read and comprehend.</h6></div>

            </div>
          </div>
        </div>`

          <div id="body-detail" className="col-lg-12 col-md-6 d-flex align-items-stretch">
          <div data-aos="fade-up" data-aos-delay="300">
            <div className='detail-info'>
              <h4  style={{textAlign:'center'}}>Body Language Analysis</h4>
              
              <h5>Facing Audience</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>This score indicates whether you were facing the audience while presenting or not as while public speaking, it is essential to face the audience and facing the audience is considered a metric for confidence.</h6></div>
            
              <h5>Swaying</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>This score indicates whether the user was swaying or rocking on one spot as swaying is discouraged in public speaking.</h6></div>

              <h5>Feet Distance</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>This scores indicates whether your were standing with your feet shoulder width apart as while public speaking, it is best practice to stand with your feet shoulder width apart.</h6></div>

            </div>
          </div>
        </div>`

          <div id="nervoussnes-detail" className="col-lg-12 col-md-6 d-flex align-items-stretch">
          <div data-aos="fade-up" data-aos-delay="300">
            <div className='detail-info'>
              <h4  style={{textAlign:'center'}}>Nervousness Analysis</h4>
              
              <h5 >Heart rate</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>Heart rate score is an indication of how much your heart rate increased or fluctuated throughout the session. Heart rate fluctuation is a measurement of the speaker's nervousness.</h6></div>
            
            </div>
          </div>
        </div>`

        </div>

      </div>
    </section>

    <section id="team" className="team section-bg" style={{ background: 'linear-gradient(to bottom, white, #8C8FFC)'}}>
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Here's the team that made it all possible</p>
        </div>

        <div className="row" style = {{justifyContent:'center', paddingBottom:'5%'}}>
          <TeamMember pic = {aliza} name = 'Aliza Lakhani'/>
          <TeamMember pic = {batool} name = 'Batool Ahmed'/>
          <TeamMember pic = {haania} name = 'Haania Siddiqui'/>
          <TeamMember pic = {hafsa} name = 'Hafsa Irfan'/>
          <TeamMember pic = {sadaf} name = 'Sadaf Shaikh' major = 'EE'/>
        </div>

      </div>
    </section>

  </main>

    </div>
  );
}

export default Home;
