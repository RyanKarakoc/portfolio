import linkedInButton from "../../images/linkedIn/LI-In-Bug.png";
import gitHubButton from "../../images/gitHub/github-mark.png";

const SocialButtons = () => {
  return (
    <div className="logos">
      <img id="logo" src={linkedInButton} alt="LinkedIn logo" />
      <img id="logo" src={gitHubButton} alt="gitHub logo" />
    </div>
  );
};

export default SocialButtons;
