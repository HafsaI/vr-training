import React from 'react';
import 'boxicons/css/boxicons.min.css';

function Feature({title, description, isAnalysis}) {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" style={{marginTop:'2%'}}>
      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
        <div className="icon"><i className='bx bx-dribble'></i></div>
        <h4 className="title">{title}</h4>
        <p className="description">{description} {isAnalysis?<><br/><a style={{textDecoration:'underline'}}>Read More</a></>:null}</p>
      </div>
    </div>
  );
}

export default Feature;
