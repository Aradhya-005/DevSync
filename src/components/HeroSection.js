import React from "react";
import "../index.css";
import HeroImg from "../assets/hero-img.png";
function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Collaborate on Code in Real-Time</h1>
          <p className="hero-subtitle">
            Seamlessly work together with powerful AI-assisted coding tools and
            live collaboration features.
          </p>
          <div className="hero-buttons">
            <a href="#get-started" className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
        <div className="hero-graphic">
          {/* Replace with an illustration or graphic */}
          <img
            src={HeroImg}
            alt=" hands writing some code on laptop with a boba and rubick cube kept besides"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
