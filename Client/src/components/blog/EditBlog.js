import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import NavBar from '../Styles/Navbar';
import Spinner from '../Spinner/spinner';
import EditUserBlog from './EditUserBlog';

const EditRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = window.localStorage.getItem('loggedIn');

  const sendRequest = async () => {
    const res = await axios.get('http://localhost:5000/api/blog').catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setRecipes(data.recipes));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <HelmetProvider>
      <NavBar />
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Edit Blogs</title>
        </Helmet>
      </Container>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className='recipe-page'>
            {recipes &&
              recipes.map((recipe, index) => (
                <EditUserBlog
                  key={index}
                  id={recipe._id}
                  isUser={localStorage.getItem('userId') === recipe.user._id}
                  title={recipe.title}
                  description={recipe.description}
                  imageURL={recipe.image}
                  userName={recipe.user.name}
                />
              ))}
          </div>
        </div>
      )}

    </HelmetProvider>
  );
};

export default EditRecipes;