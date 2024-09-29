import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quisquam repudiandae dignissimos itaque maiores, vel amet! Adipisci,
            perferendis nihil error, itaque quidem, fuga inventore voluptates
            molestias laborum molestiae odio placeat?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
