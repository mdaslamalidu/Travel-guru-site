import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from "../../assests/logo.png"
import facebook from "../../assests/fb.png"
import google from "../../assests/google.png"
import "./Login.css";


const Login = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='menu'>
                    <ul className='menu-list'>
                        <li>News</li>
                        <li>Destinations</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Login</li>
                    </ul>
                </div>
            </nav>
            <div className='mx-auto width-set'>
                <Form className='form-style'>
                    <h5>Log In</h5>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address:</label>
                            <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password:</label>
                            <input type="password" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-check d-flex justify-content-between">
                            <div>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <Link className='text-danger'>Forgot Password</Link>
                        </div>
                        <button className='w-100 btn btn-warning my-3' type="submit">Log in</button>
                    </form>
                    <p>Don't have an account?<Link to="/register">Create an account</Link></p>
                    <p className='login-pera'>or</p>
                </Form>

                <div>
                    <div className='facebook-image'>
                        <img src={facebook} alt="" />
                        <p>Countinue with facebook</p>
                    </div>
                    <div className='facebook-image'>
                        <img src={google} alt="" />
                        <p>Countinue with google</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;