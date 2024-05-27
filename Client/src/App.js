import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import UserDetails from './components/auth/userDetails';
import Blogs from './components/blog/Blogs';
import CreateBlog from './components/blog/CreateBlog';
import EditRecipes from './components/blog/EditBlog';
import UpdateBlog from './components/blog/UpdateBlog';
import AllBlogs from './components/blog/AllBlogs';
import Footer from './components/Styles/Footer';

const App = () => {
  return (
      <Router>
        <div>
            <Routes>
              <Route exact path="/" element={<Blogs />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/create-blog' element={<CreateBlog />} />
              <Route path='/edit-blogs' element={<EditRecipes />} />
              <Route path="/update-blogs/:id" element={<UpdateBlog />}/>
              <Route path="/recipes-admin" element={<AllBlogs />}/>              
            </Routes>
            <Footer/>
        </div>
      </Router>
  );
};

export default App;
