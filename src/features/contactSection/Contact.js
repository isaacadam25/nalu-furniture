import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/* component imports */
import ContactForm from '../../app/components/ContactForm';

const Contact = () => {
  return (
    <Container fluid className="py-2">
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <h6 className="display-6 text-center py-4">Get In Touch With Us</h6>
          <p className="text-muted text-center font-monospace">
            We Like To Hear From You
          </p>
          <ContactForm />
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <div className="contact-info py-4">
            <h3 className="display-6">Reach Us Here:</h3>
            <div className="py-3">
              <p className="lead contact-text">
                <i className="fa fa-phone px-3" /> 0714 191789 <br />
                <i className="fa fa-map-marker px-3" /> Tabata Aroma <br />
                <i className="fa fa-envelope px-3" /> sales@nalugeneral.co.tz
                <br />
                Nalu General Enterprises <br />
                P.O Box 24822 <br />
                Dar es salaam
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
