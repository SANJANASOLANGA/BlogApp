import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from 'react-bootstrap';

export default function SignUp() {
    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [secretKey, setSecretKey] = useState("");

    const handleSubmit = (e) => {
        if (secretKey !== "MERN@123") {
            alert("Enter a valid secret key!");
        } else {
            e.preventDefault();

            console.log(fname, lname, email, password);
            if (fname == ! ' ' || lname == ! ' ' || email == ! ' ' || password == ! ' ') {
                alert('All fields are required!')
            }
            else {
                fetch("http://localhost:5000/register", {
                    method: "POST",
                    crossDomain: true,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                        fname,
                        email,
                        lname,
                        password,
                        userType,
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data, "userRegister");
                        if (data.status === "ok") {
                            alert("Registration Successful");
                            window.localStorage.setItem('token', data.data);
                            window.localStorage.setItem('loggedIn', true);

                            navigate('/Blogs', { replace: true });
                        } else if (data.error === "User Exists") {
                            alert("User Exists!");
                        } else {
                            alert("Something went wrong");
                        }
                    });
            }

        }
    };

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Blogs | Sign Up</title>
                </Helmet>
            </Container>
            <Container>
                <div>
                    <div className='auth'>
                        <form className="form-container" onSubmit={handleSubmit}>
                            <h6 className="form-container__subtitle">Are you a admin? Please Sign Up first to Add Recipe</h6> <br /><br />
                            <h3 className="form-container__title">Sign Up</h3>
                            <div>
                                <label className="form-container__label">Secret Key</label>
                                <input
                                    type="text"
                                    placeholder="Secret Key"
                                    onChange={(e) => setSecretKey(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="form-container__label">First name</label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="form-container__label">Last name</label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="form-container__label">Email address</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="form-container__label">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <br />
                                <button type="submit" className="form-container__submit-button">
                                    Sign Up
                                </button>
                            </div>
                            <p>
                                Already have an account? <a href="/sign-in"><span style={{ color: "white" }}>Sign In</span></a>
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </HelmetProvider>
    );
}