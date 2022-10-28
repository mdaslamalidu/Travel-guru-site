import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assests/logo.png"
import "./BookingPage.css";

const BookingPage = () => {
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
                        <p className='home-pera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ratione distinctio, blanditiis magnam doloribus recusandae molestias <br />provident mollitia eos, explicabo fugiat qui soluta <br />repellat. Harum impedit aliquam repudiandae dicta, labore consequuntur?</p>
                    </div>
                    <div className='booking-date'>
                        <div>
                            <label>Origin</label>
                            <input type="text" name="" id="" placeholder='start place' />
                        </div>
                        <div>
                            <label>Destination</label>
                            <input type="text" name="" id="" placeholder='where you go' />
                        </div>
                        <div>
                            <div>
                                <label>From</label>
                                <input type="date" name="" id="" />
                            </div>
                            <div>
                                <label>To</label>
                                <input type="date" name="" id="" />
                            </div>
                        </div>
                        <Link to="/yourPlace"><button className='final-btn'>Start Booking</button></Link>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default BookingPage;