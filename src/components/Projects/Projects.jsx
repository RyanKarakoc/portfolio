const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p className="divider">------------------</p>
      <div className="projectContainer">
        <h2 id="projectImg1Header">Project 1</h2>
        <p id="projectImg1Description">
          A little bit of imformation regading project 1
        </p>
        <img src="" alt="" id="projectImg1" />
        <div id="projectImg1Status">In Progress</div>
        <h2 id="projectImg2Header">Project 2</h2>
        <p id="projectImg2Description">
          A little bit of imformation regading project 2
        </p>
        <img src="" alt="" id="projectImg2" />
        <div id="projectImg2Status">In Progress</div>
        <h2 id="projectImg3Header">Project 3</h2>
        <p id="projectImg3Description">
          A little bit of imformation regading project 3
        </p>
        <img src="" alt="" id="projectImg3" />
        <div id="projectImg3Status">Completed</div>
        <h2 id="projectImg4Header">Project 4</h2>
        <p id="projectImg4Description">
          A little bit of imformation regading project 4
        </p>
        <img src="" alt="" id="projectImg4" />
        <div id="projectImg4Status">In Progress</div>
      </div>
    </div>
  );
};

export default Projects;
