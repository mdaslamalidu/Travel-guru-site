import React from 'react';
import "./Home.css";
import logo from "../../assests/logo.png"
import img1 from "../../assests/Sreemongol.png"
import img2 from "../../assests/sundorbon.png"
import img3 from "../../assests/Sajek.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='search'>
                    <input type="text" name="" id="" placeholder='Search your destinations' />
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
            <section>
                <article className='home-container'>
                    <div className='home-title'>
                        <h1 className='place-name-title'>Cox's Bazar</h1>
                        <p className='home-pera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Ratione distinctio, blanditiis magnam doloribus recusandae molestias <br/>provident mollitia eos, explicabo fugiat qui soluta <br/>repellat. Harum impedit aliquam repudiandae dicta, labore consequuntur?</p>
                        <Link className='btn-link' to="/booking">
                            <button className='home-btn'>Booking <FaLongArrowAltRight style={{marginLeft: "10px"}}/></button>
                        </Link>
                    </div>
                    <div className='home-place'>
                        <div className="card">
                            <Link to="/booking">
                                <img src={img1} alt="" />
                                <h2 className='card-title'>cox'sbazar</h2>
                            </Link>
                        </div>
                        <div className="card">
                            <Link to="/booking">
                                <img src={img2} alt="" />
                                <h2 className='card-title'>Senmartin</h2>
                            </Link>
                        </div>
                        <div className="card">
                            <Link to="/booking">
                                <img src={img3} alt="" />
                                <h2 className='card-title'>Sreemongol</h2>
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Home;