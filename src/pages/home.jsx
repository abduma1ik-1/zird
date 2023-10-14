import React from 'react'

import Logo from '../assets/svg/logo.svg'
import Search from '../assets/svg/search.svg'
import Play from '../assets/svg/play.svg'
import Photo1 from '../assets/svg/reclams/photo1.svg'
import Photo2 from '../assets/svg/reclams/photo2.svg'
import Photo3 from '../assets/svg/reclams/photo3.svg'
import Photo4 from '../assets/svg/reclams/photo4.svg'
import Photo5 from '../assets/svg/reclams/photo5.svg'
import Photo6 from '../assets/svg/reclams/photo6.svg'

import MainGirl from '../assets/images/main.png'

const Home = () => {
    return (
        <div>
            <div className='header'>
                <div className='container'>
                    <div className='header_inner'>
                        <div className='header_left'>
                            <img src={Logo} alt="" />
                            <div className='header_nav'>
                                <div className='header_nav_bar'>Home</div>
                                <div className='header_nav_bar'>Pricing</div>
                                <div className='header_nav_bar'>Blog</div>
                                <div className='header_nav_bar'>Become a member</div>
                                <div className='header_nav_bar'>About us</div>
                            </div>
                        </div>
                        <div className='header_right'>
                            <div className='header_input'>
                                <input type="text" />
                                <img src={Search} alt="" />
                            </div>
                            <div className='header_login'>
                                <div className='header_login_text'>Login</div>
                                <div>/</div>
                                <div className='header_login_text'>Sing Up</div>
                            </div>
                        </div>
                    </div>

                    <div className='main'>
                        <div className='main_left'>
                            <div className='main_title'>Find out talented
                                <span className='main_span'> freelancer</span> with
                                better review faster.</div>
                            <div className='main_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
                            <div className='main_buttons'>
                                <button className='main_button1'>Discover Now</button>
                                <div className='main_button2'>
                                    <img src={Play} alt="" /> Watch Demo
                      dd          </div>
                            </div>
                        </div>
                        <div className='main_right'>
                            <img src={MainGirl} alt="" />
                        </div>
                    </div>

                    <div className='reclams'>
                        <div className='reclams_inner'>
                            <div><img src={Photo1} alt="" /></div>
                            <div><img src={Photo2} alt="" /></div>
                            <div><img src={Photo3} alt="" /></div>
                            <div><img src={Photo4} alt="" /></div>
                            <div><img src={Photo5} alt="" /></div>
                            <div><img src={Photo6} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
