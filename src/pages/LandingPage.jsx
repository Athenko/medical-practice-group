import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import RoleSelection from '../components/RoleSelection';
import AuthForm from '../components/AuthForm';
//import logo from '../assets/logo.png';
<assets></assets>; 

function LandingPage() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <>
      <Header />
      <Container fluid className="py-5" style={{ backgroundColor: 'white', minHeight: '90vh' }}>
        <Row className="align-items-center justify-content-center">
          {/* Left Column */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <h2 className="fw-bold text-primary">Welcome to IT Medical Practice</h2>
            <p className="text-muted">Where Medicine Meets Intelligence.</p>
            {/*{logo && <img src={logo} alt="Logo" style={{ width: '180px', marginTop: '2rem' }} />}*/}
          </Col>

          {/* Right Column */}
          <Col md={5} className="d-flex justify-content-center">
            {!selectedRole ? (
              <RoleSelection onSelectRole={setSelectedRole} />
            ) : (
              <AuthForm role={selectedRole} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;
