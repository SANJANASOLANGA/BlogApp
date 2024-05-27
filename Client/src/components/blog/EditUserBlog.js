import React from 'react';
import { Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUserBlog = ({ title, description, imageURL, id }) => {
  const bulletPoints = description.split('•').filter(point => point.trim() !== '');

  const navigate = useNavigate();

  const handleEdit = (e) => {
    navigate(`/update-blogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    alert('Deleted Successfully!');
    deleteRequest().then(() => navigate('/')).then(() => navigate('/adminHome'));
  };

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

        <Box display={'flex'}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
            <EditIcon color="warning" titleAccess='Edit Blogs'/>
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteForeverIcon color="error" titleAccess='Delete Blogs'/>
          </IconButton>
        </Box>

        <CardHeader
          title={title}
          style={{color: 'white'}}
        />
        <CardMedia style={{ width: "100%", height: "100%", paddingTop: "2%", color: 'white', opacity:1, objectFit: 'cover' }}component="img" image={imageURL} alt={title} title={title} />
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

export default EditUserBlog;