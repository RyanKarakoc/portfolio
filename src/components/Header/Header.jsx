import CvButton from "../CV-Button/CV-Button";
import Picture from "../Picture/Picture";

const Header = () => {
  return (
    <div className="header">
      <div className="headerText">
        <div className="name">
          <h1>I'm</h1>
          <h1 id="ryan">Ryan</h1>
          <h1>Karakoc</h1>
        </div>
        <div className="info">
          <p id="infoText">
            Currently on a new journey to become a full stack developer,
          </p>
          <p id="infoText">located in Manchester England.</p>
        </div>
        <CvButton />
      </div>
      <Picture />
    </div>
  );
};

export default Header;
