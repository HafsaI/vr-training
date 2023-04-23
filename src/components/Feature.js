import React from 'react';

function Feature({title, description }) {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
        <div className="icon"><i className="bx bxl-dribbble"></i></div>
        <h4 className="title"><a href="">{title}</a></h4>
        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
      </div>
    </div>
  );
}

export default Feature;
