import gameProject from "../../images/projects/Game.png";
import allotment from "../../images/projects/Allotment3.png";
import htmlCanvasGame from "../../images/projects/htmlCanvasGame.png"

const Projects = () => {
  const handleProject2OnClick = () => {
    window
      .open("https://github.com/RyanKarakoc/Allotment-App", "_blank")
      .focus();
  };

  const handleProject3OnClick = () => {
      window
        .open("https://github.com/RyanKarakoc/htmlCanvasGame", "_blank")
        .focus();
  }
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
          watering or seasonal harvest / sowing dates etc..
        </p>
        <img
          src={allotment}
          alt=""
          id="projectImg2"
          onClick={handleProject2OnClick}
        />
        <div id="projectImg2Status">Completed</div>
        <h2 id="projectImg3Header" onClick={handleProject3OnClick}>Html Canvas Game</h2>
        <p id="projectImg3Description">
          platfrom game using html canvas and javascript, defeat as many enemies withing 30s using your energy and trying not to take unwanted damage.
        </p>
        <img src={htmlCanvasGame} alt="" id="projectImg3" onClick={handleProject3OnClick}/>
        <div id="projectImg3Status">In Progress</div>
        {/* <h2 id="projectImg4Header">Project 4</h2>
        <p id="projectImg4Description">
          A little bit of imformation regading project 4
        </p>
        <img src="" alt="" id="projectImg4" />
        <div id="projectImg4Status">In Progress</div> */}
      </div>
    </div>
  );
};

export default Projects;
