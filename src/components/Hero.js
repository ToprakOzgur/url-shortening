import React from "react";
import working from "../images/illustration-working.svg";
const Hero = () => {
  return (
    <section >
      <div className="container hero">
        <aside className="hero__text">
          <h1>More than just shorter links</h1>
          <p> Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <a href="#" className="btn">
            Get Started
          </a>
        </aside>
        <aside className="hero__fig">
          <figure>
            <img src={working} alt="" />
          </figure>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
