// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <section className="About">
      <h2>ABOUT</h2>
      <p>Меня зовут Саша, я контент фотограф. Снимаю вас на айфон и профессиональную камеру.</p>
      <div className="about-images">
        <img src="path/to/your/image1.jpg" alt="Photographer" />
        <img src="path/to/your/image2.jpg" alt="Photographer" />
      </div>
    </section>
  );
}

export default About;