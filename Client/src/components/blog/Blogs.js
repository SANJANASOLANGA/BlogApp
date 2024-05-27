import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserBlog from './UserBlog';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import NavBar from '../Styles/Navbar';
import Spinner from '../Spinner/spinner';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const sendRequest = async () => {
    const res = await axios.get('http://localhost:5000/api/blog').catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.recipes));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <HelmetProvider>
      <NavBar />
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blogs</title>
        </Helmet>
      </Container>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className='recipe-page'>
            {blogs &&
              blogs.map((recipe, index) => (
                <UserBlog
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

export default Blogs;