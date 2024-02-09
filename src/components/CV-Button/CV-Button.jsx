import resume from "../../downloads/Resume.pdf";

const CvButton = () => {
  // const handleDownloadCVClick = () => {
  //   console.log("hello");
  // };

  return (
    <div className="buttonContainer">
      <a
        href={resume}
        download="Ryan-Karakoc-Resume"
        target="_blank"
        rel="noreferrer"
      >
        <div className="CvButton">
          <p id="CvButton">Download CV</p>
        </div>
      </a>
    </div>
  );
};

export default CvButton;
