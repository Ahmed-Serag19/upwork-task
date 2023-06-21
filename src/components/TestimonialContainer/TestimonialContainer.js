import React from 'react';
import './TestimonialContainer.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Testimonial from '../Testimonial/Testimonial';
const TestmonialContainer = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial">
      <header>
        <h1>Testimonials</h1>
      </header>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Testimonial
              name="Jack F"
              jobTitle="Ex Blackrock PM"
              testimonial="Love how Loch integrates portfolio analytics and whale watching into one unified app."
            />
          </div>
          <div>
            <Testimonial
              name="Yash P"
              jobTitle="Research, 3poch Crypto Hedge Fund"
              testimonial="I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"
            />
          </div>
          <div>
            <Testimonial
              name="Shiv S"
              jobTitle="Co-Founder Magik Labs"
              testimonial="Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple."
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestmonialContainer;
