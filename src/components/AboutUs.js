import React from 'react';
import PCcomponent from './PCcomponent';

const AboutUs =()=> {
    return (
        <div className="content-">
            <div className='sub-container'>About Us</div>
            <div className='aboutus'>
                <div> <img className='about-logo' src={require('../media/logo.png')} /> </div>
        </div>
        <div className = 'divbg'>
        <div className = "post-header">
            <p className = "post-header-text"> What is PCGuro? </p>
        </div>
                <div className = "about-us-div">
                <div className = 'about-us-description'>
                <p className="post-header-text">What is PC Guro?</p> 
                
                <p className = "aboutus-desc"> The idea of creating a space dedicated to certain interests or hobbies is not a
                new or revolutionary idea. With the rise of the internet, people have made ways of
                adapting this idea in an online environment, thus giving birth to online forums.
                Online forums provide great opportunities for people of different upbringings and
                experiences to share their ideas and thoughts to other people. Most of the time, this is
                seen as a good thing, but in some instances this may be problematic. Some popular
                websites that people commonly go to have its shortcomings in the Philippine setting,
                one of which are computer building/buying forums. </p>
                <p className = "aboutus-desc">
                Our group noticed that forums, specifically computer building/buying forums
                are mostly irrelevant for people living in the Philippines. What’s readily available in
                other countries is not necessarily always accessible in our country. Similarly, prices
                of computer parts also differ from country to country. With this in mind, we have
                decided to create, PCGuro, an online forum focused on providing relevant and
                accurate information about everything a PC builder/enthusiast in the Philippines
                needs to know.
                </p>
                </div>
        </div>
        </div>
            <div className='sub-container'>
                <h1> Backend Packages </h1>
            </div>
            <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
     
                }}>
                <ul style={{
                    display: 'inline-block',
                    alignItems: 'left'
                }}>
                        <li> bcrypt@5.0.1 </li>
                        <li> body-parser@1.20.0 </li>
                        <li> cors@2.8.5 </li>
                        <li> dotenv@16.0.1 </li>
                        <li> express@4.18.1 </li>
                        <li> jsonwebtoken@8.5.1 </li>
                        <li> mongodb@4.6.0 </li>
                        <li> mongoose-int32@0.6.0</li>
                        <li> mongoose@6.3.5</li>
                        <li> multer-gridfs-storage@5.0.2</li>
                        <li> multer@1.4.2</li>
                    </ul>
            </div>
            <div className='sub-container'>
                <h1>Frontend Packages </h1>
            </div>
            <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
     
                }}>
                <ul style={{
                    display: 'inline-block',
                    alignItems: 'left'
                }}>
                        <li> @testing-library/jest-dom@5.16.4 </li>
                        <li> @testing-library/react@13.0.1 </li>
                        <li> @testing-library/user-event@13.5.0, </li>
                        <li> base-64@1.0.0 </li>
                        <li> buffer@6.0.3 </li>
                        <li> http-proxy-middleware@2.0.6 </li>
                        <li> react-dom@18.0.0 </li>
                        <li> react-router-dom@6.3.0</li>
                        <li> react-scripts@5.0.1 </li>
                        <li> react@18.0.0 </li>
                        <li> web-vitals@2.1.4</li>
                        <li> xlsx@0.18.5</li>
                    </ul>
            </div>

        </div>
        
    );
}

export default AboutUs;