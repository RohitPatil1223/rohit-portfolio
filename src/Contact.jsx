import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm("service_xad0bda", "template_obz4q5g", form.current, {
        publicKey: "QFrzD6mPKvs-QfxVB",
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
          setStatus("error");
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="Contact">
      <Container className="py-5">
        <h2 className="text-center mb-5">Contact Me</h2>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form ref={form} onSubmit={sendEmail} className="contact-form p-4">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <Alert variant="success" className="mt-3 mb-0">
                  Message sent successfully!
                </Alert>
              )}

              {status === "error" && (
                <Alert variant="danger" className="mt-3 mb-0">
                  Failed to send message. Please try again.
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
