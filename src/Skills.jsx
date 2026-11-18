import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { SiRedux } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    width: "90%",
  },
  {
    name: "CSS",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    width: "80%",
  },
  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    width: "93%",
  },
  {
    name: "React",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    width: "91%",
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg",
    width: "72%",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    width: "70%",
  },
];

function Skills() {
  return (
    <div id="Skills">
      <Container className="py-5">
        <h2 className="text-center mb-5">My Skills</h2>

        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={4} lg={3} className="mb-4">
              <Card className="skill-card text-center p-3">
                <Card.Img
                  variant="top"
                  src={skill.icon}
                  className="skill-icon mx-auto"
                />
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      style={{ width: skill.width }}
                    ></div>
                    <span style={{ marginLeft: "5px" }}>{skill.width}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
