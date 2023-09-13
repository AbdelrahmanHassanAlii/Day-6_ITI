import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";

const Gallery = () => {
  return (
    <Carousel
      id="carouselMultiItemExample"
      className="carousel-dark text-center my-5"
      data-ride="carousel"
    >
      <Carousel.Item>
        <Container>
          <Row>
            <Col lg={4}>
              <Card>
                <Card.Img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                  alt="Waterfall"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Button</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <Card.Img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                  alt="Waterfall"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Button</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <Card.Img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                  alt="Waterfall"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Button</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Add more cards here */}
          </Row>
        </Container>
      </Carousel.Item>

      {/* Add more carousel items here */}
    </Carousel>
  );
};

export default Gallery;
