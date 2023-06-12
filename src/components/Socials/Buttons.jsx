import linkedInButton from "../../images/linkedIn/LI-In-Bug.png";
import gitHubButton from "../../images/gitHub/github-mark.png";

const SocialButtons = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ryan-karakoc", "_blank").focus();
  };

  const handleGitHubClick = () => {
    window
      .open("https://github.com/RyanKarakoc?tab=repositories", "_blank")
      .focus();
  };
  return (
    <div className="logos">
      <img
        id="logo"
        src={linkedInButton}
        alt="LinkedIn logo"
        onClick={handleLinkedInClick}
      />
      <img
        id="logo"
        src={gitHubButton}
        alt="gitHub logo"
        onClick={handleGitHubClick}
      />
    </div>
  );
};

export default SocialButtons;
