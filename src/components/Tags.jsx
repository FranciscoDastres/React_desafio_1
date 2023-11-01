import React from 'react';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tags = ({ text, backgroundColor }) => {
  return (
    <Badge className="badge" style={{ backgroundColor }}>{text}</Badge>
  );
};

export default Tags;