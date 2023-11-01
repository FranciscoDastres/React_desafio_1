//MyCard.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const MyCard = ({ image, name, desc, tag, colorTag }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        {tag && colorTag && (
          <Tags
            text={tag}
            style={{ backgroundColor: colorTag }}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default MyCard;