import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import homepageImage from '../assets/homepageImage.png'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <img
          src={homepageImage} 
          alt="Artificial Intelligence"
          className="homepage-image"
        />
        <h1>Welcome to the Course Enrolment Portal</h1>
      </header>
      <main>
        <section className="homepage-content">
          <p>
            If you are excited by the latest technological advances and have a passion for
            problem-solving, join us at RP School of Infocomm (SOI). We will help you
            discover your hidden technical skills and nurture your creative digital dreams.
          </p>
          <p>
            We offer four diploma programmes across a wide range of infocomm disciplines.
          </p>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>
          ©2024 | <Link to="/">Republic Polytechnic</Link>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
