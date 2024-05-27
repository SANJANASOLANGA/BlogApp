import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const UserBlog = ({ title, description, imageURL }) => {
  const bulletPoints = description.split('•').filter(point => point.trim() !== '');

  return (
    <div>
      <Card
        sx={{
          width: '40%',
          margin: 'auto',
          marginBottom: '1%',
          padding: 2,
          boxShadow: '0px 0px 0px #ccc',
          ':hover': {
            boxShadow: '5px 5px 10px #ccc',
          },
          backgroundColor: 'rgba(64, 42, 20, 0.9)'          
        }}
      >
        <CardHeader
          title={title}
          style={{color: 'white'}}
        />
        <CardMedia style={{ width: "100%", height: "100%", paddingTop: "2%", color: 'white', opacity:1 }}component="img" image={imageURL} alt={title} title={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {bulletPoints.map((point, index) => (
              <div key={index}>
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}}>
                  • {point.trim()}
                </Typography>
                <br />
              </div>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserBlog;