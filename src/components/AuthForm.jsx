import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function AuthForm({ role }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <Card className="p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white' }}>
      <h4 className="mb-3 text-center text-primary">
        {isLogin ? `Login as ${role}` : `Sign Up as ${role}`}
      </h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        {!isLogin && (
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        )}

        <Button variant="primary" className="w-100 mb-2">
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
        <Button variant="link" className="w-100 text-secondary" onClick={toggleMode}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Button>
      </Form>
    </Card>
  );
}

export default AuthForm;
