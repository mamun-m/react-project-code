const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me </h1>
        <img className="svg-icons-color" src="/src/img/svg.webp" alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img className="about-img" src="/src/img/svg.JPG" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              As a Front-End Developer, here’s a text you can add to your
              website, highlighting your role, skills, and the value you bring
              to the development of user interfaces and web applications:
            </p>
            <p>
              Hi, i am a passionate Front-End Developer with a strong focus on
              creating visually engaging, user-friendly, and high-performing
              websites. I specialize in translating designs into functional,
              interactive experiences using modern web technologies.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>React js</p> <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Redux toolkit</p> <hr style={{ width: "50%" }} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experinces</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Propjects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
