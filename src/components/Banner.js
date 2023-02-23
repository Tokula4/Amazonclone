import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 z-20 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/img/banner.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/img/banner-1.png" />
        </div>
        <div>
          <img loading="lazy" src="/img/banner-3.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
