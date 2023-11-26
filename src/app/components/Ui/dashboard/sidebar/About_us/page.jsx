import React from 'react';
import styles from './about_us.css';
import { SiLinkedin } from "react-icons/si";
import { SiAlchemy } from "react-icons/si";
const AboutUs = () => {
  return (
    <div className={styles.about}>
      <h2>
      <SiAlchemy /> About Us
      </h2>
      <p>
        Welcome to the world of <strong>Alchemi</strong> at Minnesota State University! We are a dynamic group of five students hailing from Ethiopia, currently on an academic journey in the heart of Minnesota. As proud members of <strong>Alchemi</strong>, we share a common vision and a relentless dedication to learning and innovation. Our diverse backgrounds converge as we collaborate on exciting projects that reflect our unique interests and expertise. Amidst the challenges of academia, our eagerness to explore, learn, and contribute remains unwavering. <strong>Alchemi</strong> is not just a name; it's a symbol of our transformative journey, where dedication and collaboration fuel our pursuit of knowledge and growth. Join us as we navigate this exciting adventure and make a meaningful impact on our academic pursuits and beyond.
      </p>
      <div className={styles.members}>
        <h3>Developers:</h3>
        <ul>
          <li>
            <span>Abel Kassa</span>
            <a href="https://www.linkedin.com/in/abel-kassa-" target="_blank" rel="noopener noreferrer">
              <SiLinkedin /> 
            </a>
          </li>
          <li>
            <span>Akrem Ahmed</span>
            <a href="https://www.linkedin.com/in/akrem-ahmed" target="_blank" rel="noopener noreferrer">
              <SiLinkedin /> 
            </a>
          </li>
          <li>
            <span>Hamede Abdulgafur</span>
            <a href="https://www.linkedin.com/in/hamede-abdulgafur" target="_blank" rel="noopener noreferrer">
              <SiLinkedin /> 
            </a>
          </li>
          <li>
            <span>Melan Shifa</span>
            <a href="https://www.linkedin.com/in/melanshifa" target="_blank" rel="noopener noreferrer">
              <SiLinkedin /> 
            </a>
          </li>
          <li>
            <span>Nahom Kidane</span>
            <a href="https://www.linkedin.com/in/nahom-kidane" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin /> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;