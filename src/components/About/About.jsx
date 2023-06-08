const About = () => {
  const date = new Date();
  const age = date.getFullYear() - 1994;

  return (
    <div className="aboutMe">
      <h1>About Me</h1>
      <p className="divider">------------------</p>
      <div className="aboutText">
        <p id="aboutText">
          {`${age}`} year old, Manchester based Full Stack Developer
        </p>
        <p id="aboutText">Passionate about coding and problem solving.</p>
      </div>
    </div>
  );
};

export default About;
