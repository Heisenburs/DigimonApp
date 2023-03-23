import { Card, Col, Row } from "react-bootstrap";
function DigiCards(props) {
  // pulled from the 'digimon' state variable declared in DigimonList.js (line 12 map)
  const { digimon } = props;

  return (
    <Row xs={4} md={8} className="g-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col xs={4}>
          <Card border="warning" bg="primary" text="white">
            <Card.Img variant="top" src={digimon.img} />
            <Card.Body>
              <div>
                <h3>{digimon.name}</h3>
                <h4>Level: {digimon.level}</h4>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DigiCards;
