import "./landing.css";
import Button from "react-bootstrap/Button";
function Landing() {
  return (
    <>
      <div className="landing">
        <div className="container content text-center">
          <h1 className="landing-h1 pt-5">Abdelrahman Hassan</h1>
          <p className="landing-p">Web Developer & Designer</p>
          <Button variant="primary" className="landing-button">
            More
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default Landing;
