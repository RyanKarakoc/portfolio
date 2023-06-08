const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    const element = document.getElementsByClassName("aboutMe");
    if (element) {
      element[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <h1 id="nav" onClick={scrollToTop}>
        HOME
      </h1>
      <h1 id="nav" onClick={handleAboutClick}>
        ABOUT
      </h1>
      <h1 id="nav">PROJECTS</h1>
      <h1 id="nav">RESUME</h1>
      <h1 id="nav">CONTACT</h1>
    </div>
  );
};

export default Navbar;
