import "./aboutme.css";
import Button from "react-bootstrap/Button";
function Aboutme() {
  const loremIpsumText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;
  return (
    <>
      <div className="about-me py-5">
        <div className="container">
          <div className="row">
            <div className="left col-lg-3 col-md-3 text-center my-auto">
              <h1>About Me</h1>
            </div>
            <div className="right col-lg-9 col-md-9 text-center">
              <img
                className="mb-4"
                src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg"
                alt=""
              />
              <p>{loremIpsumText}</p>
              <Button variant="primary">Download CV</Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
