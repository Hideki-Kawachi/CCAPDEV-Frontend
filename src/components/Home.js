import React from 'react';

const Home =()=> {
    return (
    <div className='content-home'>

        <div className="sub-container">
        </div>

        <div className="name-container">
            <span className="website-name">PCGuro</span>
        </div>

        <div className="main-section-container">
            <div className='main-section-content'>
                <a href="./Post.js"><span>Technical Reviews</span></a>
                <a href="./Post.js"><span>Configuration Guide</span></a>
                <a href="./Post.js"><span>PC Build Help</span></a>
            </div>
        </div>

        <div className="pcguro-build-guide-container">
            <div className="pcguro-builds-section">
                <div className="span-box">
                    Build Guides
                </div>
                <div className="pc-build-box">
                    <a href="./Post.js">
                    <div className='build-title'>
                        <span className='title-text'>Entry-Level Build</span>
                        <div>
                            <span className='title-text'>P30,000</span>
                        </div>
                        
                    </div>
                    <div className='pic-container'>
                        <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                    </div>
                    </a>
                </div>

                <div className="pc-build-box">
                    <a href="./Post.js">
                    <div className='build-title'>
                        <span className='title-text'>Entry-Level Build</span>
                        <div>
                            <span className='title-text'>P30,000</span>
                        </div>
                        
                    </div>
                    <div className='pic-container'>
                        <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                    </div>
                    </a>
                </div>

                <div className="pc-build-box">
                    <a href="./Post.js">
                    <div className='build-title'>
                        <span className='title-text'>Entry-Level Build</span>
                        <div>
                            <span className='title-text'>P30,000</span>
                        </div>
                        
                    </div>
                    <div className='pic-container'>
                        <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                    </div>
                    </a>
                </div>


            </div>
            
        </div>
        
    </div>
    );
    }
 
export default Home;