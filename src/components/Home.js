import React from 'react';
import pic from '../images/homeTop.jpg';
import oculus from '../images/oculus2.png'
import Feature from './Feature';
import TeamMember from './TeamMember';
import features from '../constants/features';
import Guide from '../images/ps_guide.pdf';
function Home() {
  return (
    <div>
          
  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up" className="home-header-center">(Slogan)</h1>
          <h2 data-aos="fade-up" data-aos-delay="400" className="home-header-center">Download our public speaking guide here</h2>
          <div data-aos="fade-up" data-aos-delay="800" className="home-header-center">
            <a className="btn-get-started scrollto" href={Guide} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>Download</a>
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
            <p className='about-content'>
              Our aim is to make sure that in every conversation, in every conference, in every interview, in every meeting, and in every speech, you manifest what you desired to.
              <br/>We've been there so we understand your anxiety. Hence, we want to help you prepare for your speeches so that you are able to give your best when you're on stage. 
              <br/><strong>Manifest</strong> is a public speaking training app that lets <strong>you</strong> practice and analyze your speeches. We are available both as a virtual reality app and a standalone analysis solution. In the VR app, you are placed in a conference room with audience and you can give your speech there. The system provides you with a fine-grained analysis of your speech, posture and nervousness.
              <br/>Here is the <a style={{textDecoration:'underline'}}>team</a> that made this possible for you.
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

        <div className="section-title" data-aos="fade-up">
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
              
              <h5>Posture</h5>
              <div className="feature-detail" style={{width:'100%'}}><h6>Our aim is to make sure that in every conversation, in every conference, in every interview, in every meeting, and in every speech, you manifest what you desired to.</h6></div>
            
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
