import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function TypingName() {
  const text = "Rohit Patil";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 120); // speed (lower = faster)

    return () => clearInterval(interval);
  }, []);

  return <span className="hero-name">{displayText}</span>;
}

function Banner() {
  const [ref, isVisible] = useInView();
  return (
    <div
      id="Home"
      ref={ref}
      className={`fade-in-section ${isVisible ? "visible" : ""}`}
    >
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Side */}
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="fw-bold">
              Hi, I'm{" "}
              <span className="highlight">
                <TypingName />
              </span>
            </h1>

            <h3 className="mt-3">
              {/* You can plug your typing component here */}
              Frontend Developer
            </h3>

            <p className="mt-3 text-muted">
              I build modern, responsive web applications using React and
              JavaScript.
            </p>

            <a
              href="/Rohit_Patil_Frontend_Developer.pdf"
              download
              target="_blank"
              className="btn btn-primary mt-3"
            >
              Download Resume
            </a>
          </Col>

          {/* Right Side */}
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <img
              src="mybannerimg1.png"
              alt="Rohit Patil"
              className="img-fluid banner-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
