import gameProject from "../../images/projects/Game.png";
import allotment from "../../images/projects/Allotment3.png";
import htmlCanvasGame from "../../images/projects/htmlCanvasGame.png";
import sandboxChess from "../../images/projects/Sandbox Chess.png";

const Projects = () => {
  const handleProject2OnClick = () => {
    window
      .open("https://github.com/RyanKarakoc/Allotment-App", "_blank")
      .focus();
  };

  const handleProject3OnClick = () => {
    window.open("https://spookycanvasgame.netlify.app/", "_blank").focus();
  };

  const handleProject4OnClick = () => {
    window
      .open("https://github.com/RyanKarakoc/sandboxChess", "_blank")
      .focus();
  };
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p className="divider">------------------</p>
      <div className="projectContainer">
        <h2 id="projectImg1Header">Pokemon Inspired Game</h2>
        <p id="projectImg1Description">
          Basic 2d top down view game using HTML Canvas
        </p>
        <img src={gameProject} alt="" id="projectImg1" />
        <div id="projectImg1Status">In Progress</div>
        <h2 id="projectImg2Header" onClick={handleProject2OnClick}>
          Allotment
        </h2>
        <p id="projectImg2Description">
          Mobile app to help users plant veg at home using notifications for
          watering or seasonal harvest / sowing
        </p>
        <img
          src={allotment}
          alt=""
          id="projectImg2"
          onClick={handleProject2OnClick}
        />
        <div id="projectImg2Status">Completed</div>
        <h2 id="projectImg3Header" onClick={handleProject3OnClick}>
          Html Canvas
        </h2>
        <p id="projectImg3Description">
          defeat as many enemies withing 30s using your energy and trying not to
          take unwanted damage.
        </p>
        <img
          src={htmlCanvasGame}
          alt=""
          id="projectImg3"
          onClick={handleProject3OnClick}
        />
        <div id="projectImg3Status">Completed</div>
        <h2 id="projectImg4Header">Sandbox Chess</h2>
        <p id="projectImg4Description">
          Sandbox enviroment for chess, analyse and practice your chess skills.
        </p>
        <img
          src={sandboxChess}
          alt=""
          id="projectImg4"
          onClick={handleProject4OnClick}
        />
        <div id="projectImg4Status">In Progress</div>
      </div>
    </div>
  );
};

export default Projects;
