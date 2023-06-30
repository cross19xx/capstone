import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="self-img">
        <img
          className="main-image"
          src="./Hospital-pic3.jpeg"
          alt="profile picture"
        />
      </div>
      <div className="self-img1">
        <img
          className="main-image1"
          src="./Health-Prof2.jpeg"
          alt="profile picture"
        />
      </div>
      <h2 className="Asection">Who we are...</h2>
      <div className="about-section">
        <div className="self-text">
          <p className="exclude">
            At MenZuZu, we firmly believe in the healing power of information.
            We are your beacon, casting a light on your path to wellness,
            leading you to the perfect destination where healing and care blend
            seamlessly. We're not just a platform; we're your health navigator,
            guiding you to facilities equipped to meet your unique healthcare
            needs. With MenZuZu, we've transformed the daunting search for a
            health facility into a journey of reassurance and comfort.
          </p>
          <p className="exclude">
            We understand the apprehension and stress associated with seeking
            medical attention. MenZuZu aims to soothe these anxieties by
            providing a powerful tool to explore and discover healthcare
            facilities with ease and confidence. By diminishing the uncertainty,
            we hope to empower you, transforming your anxiety into action,
            enabling you to take decisive steps towards your wellbeing.
          </p>
          <p className="exclude">
            Our sophisticated search platform is built upon a foundation of
            empathy, innovation, and accuracy. Designed with you in mind,
            MenZuZu strives to bring order to the often chaotic healthcare
            landscape. Our interface is intuitive, our data accurate, and our
            commitment unwavering. We infuse innovation with care, creating a
            bridge that connects you to the healthcare universe with a few
            simple clicks.
          </p>
          <p className="exclude">
            At MenZuZu, we are more than an online platform; we are your
            companion in health, your navigator in distress, and your beacon in
            the dark. Because we believe that the journey to healing should be a
            pathway lined with clarity and hope. Join us on this journey and
            discover a new horizon of healthcare empowerment.
          </p>

          <p className="tag">
            MenZuZu: Navigating Health, Illuminating Hope.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
