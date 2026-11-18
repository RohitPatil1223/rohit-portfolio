import Container from "react-bootstrap/Container";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <Container className="text-center">
        <h5 className="mb-3">Rohit Patil</h5>

        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:rohitpatil55718@email.com" className="footer-icon">
            <FaEnvelope />
          </a>
        </div>

        <p className="mb-0 text-muted">
          © {new Date().getFullYear()} Rohit Patil. All rights reserved. ❤️
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
