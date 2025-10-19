import React from 'react';
import { Button, Stack } from 'react-bootstrap';

function RoleSelection({ onSelectRole }) {
  return (
    <div className="text-center">
      <h4 className="mb-3">Login or Sign Up</h4>
      <p className="text-muted mb-4">Who is logging in?</p>

      <Stack gap={3} className="mx-auto" style={{ maxWidth: '250px' }}>
        <Button variant="primary" onClick={() => onSelectRole('Administrator')}>
          Administrator
        </Button>
        <Button variant="outline-primary" onClick={() => onSelectRole('Assistant')}>
          Doctor’s Assistant
        </Button>
        <Button variant="outline-primary" onClick={() => onSelectRole('Doctor')}>
          Doctor
        </Button>
      </Stack>
    </div>
  );
}

export default RoleSelection;
