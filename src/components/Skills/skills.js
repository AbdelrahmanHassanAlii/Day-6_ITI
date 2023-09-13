import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  const loremIpsumText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  `;
  return (
    <section className="bsb-skill-1 bg-light py-3 py-md-5">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
            <h2 className="mb-4 display-5 text-center">Skills</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">
              {loremIpsumText}
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="overflow-hidden">
        <Row className="justify-content-xl-center gy-3 gy-sm-4">
          <Col xs={12} sm={6} xl={5}>
            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
              <h3 className="fw-bold mb-2">Bootstrap</h3>
              <p className="text-secondary fst-italic mb-4">
                Nullam felis turpis, commodo id fermentum eget, semper vel odio.
              </p>
              <ProgressBar
                variant="success"
                animated
                now={85}
                label="85%"
                aria-label="Bootstrap"
              />
            </div>
          </Col>
          <Col xs={12} sm={6} xl={5}>
            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
              <h3 className="fw-bold mb-2">React</h3>
              <p className="text-secondary fst-italic mb-4">
                Nullam felis turpis, commodo id fermentum eget, semper vel odio.
              </p>
              <ProgressBar
                variant="info"
                animated
                now={75}
                label="75%"
                aria-label="React"
              />
            </div>
          </Col>
          <Col xs={12} sm={6} xl={5}>
            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
              <h3 className="fw-bold mb-2">Vue</h3>
              <p className="text-secondary fst-italic mb-4">
                Nullam felis turpis, commodo id fermentum eget, semper vel odio.
              </p>
              <ProgressBar
                variant="warning"
                animated
                now={65}
                label="65%"
                aria-label="Vue"
              />
            </div>
          </Col>
          <Col xs={12} sm={6} xl={5}>
            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
              <h3 className="fw-bold mb-2">WordPress</h3>
              <p className="text-secondary fst-italic mb-4">
                Nullam felis turpis, commodo id fermentum eget, semper vel odio.
              </p>
              <ProgressBar
                variant="danger"
                animated
                now={95}
                label="95%"
                aria-label="WordPress"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
