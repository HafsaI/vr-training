import React from 'react'

function TeamMember( {pic, major='CS', name} ) {
  return (
    <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
    <div className="member" data-aos="fade-up" data-aos-delay="300">
      <div className="member-img">
        <img src={pic} className="img-fluid" alt=""/>
        {/* <div className="social">
          <a href=""><i className="bi bi-twitter"></i></a>
          <a href=""><i className="bi bi-facebook"></i></a>
          <a href=""><i className="bi bi-instagram"></i></a>
          <a href=""><i className="bi bi-linkedin"></i></a>
        </div> */}
      </div>
      <div className="member-info">
        <h4>{name}</h4>
        <span>{major}, 2023</span>
      </div>
    </div>
  </div>
  )
}

export default TeamMember