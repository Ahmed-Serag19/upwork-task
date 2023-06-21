import React from 'react';
import './Testimonial.css';

const Testimonial = ({ name, jobTitle, testimonial }) => {
  return (
    <div className="testimonial-container">
      <h4>
        {name} <span>{jobTitle}</span>
      </h4>

      <p className="mt-2">“{testimonial}”</p>
    </div>
  );
};

export default Testimonial;
