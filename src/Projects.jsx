import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Team Navitas",
    duration: "Aug 2024 – Present",
    points: [
      "Developed and maintained SPAs using React.js",
      "Built 20+ reusable UI components",
      "Managed state using Redux and optimized performance",
      "Integrated REST APIs using Axios",
      "Implemented form validation with Formik",
      "Collaborated with backend and QA teams",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Team Infy-Spraks",
    duration: "Dec 2022 – Aug 2024",
    points: [
      "Translated business requirements into scalable frontend solutions",
      "Developed responsive UI components",
      "Improved performance using lazy loading",
      "Increased conversion rate by 20%",
      "Integrated secure REST APIs",
    ],
  },
];

function Projects() {
  return (
    <div id="Projects" >
    <Container className="py-5">
      <h2 className="text-center mb-5">Experience</h2>

      {experiences.map((exp, index) => (
        <Card key={index} className="exp-card mb-4 p-3">
          <h5 className="fw-bold">
            {exp.role} @ {exp.company}
          </h5>
          <p className="text-muted">{exp.duration}</p>

          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </Container>
    </div>
  );
}

export default Projects;