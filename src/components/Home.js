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
                <span>Technical Reviews</span>
                <span>Local Store Reviews</span>
                <span>Configuration Guide</span>
                <span>PC Build Help</span>
            </div>
        </div>

        <div className="pcguro-build-guide-container">
            <div className="pcguro-builds-section">
                <div className="span-box">
                    Build Guides
                </div>
                <div className="pc-build-box">
                    <div className='build-title'>
                        <span className='title-text'>Entry-Level Build</span>
                        <div>
                            <span className='title-text'>P30,000</span>
                        </div>
                    </div>
                    <div className='pic-container'>
                        <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                    </div>
                </div>

                <div className="pc-build-box">
                    <div className='build-title'>
                        <span className='title-text'>Entry-Level Build</span>
                        <div>
                            <span className='title-text'>P30,000</span>
                        </div>
                    </div>
                    <div className='pic-container'>
                        <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                    </div>
                </div>

                <div className="pc-build-box">
                    <div className='build-title'>
                        <span className='title-text'>Entry-Level Build</span>
                        <div>
                            <span className='title-text'>P30,000</span>
                        </div>
                    </div>
                    <div className='pic-container'>
                        <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                    </div>
                </div>


            </div>
            
        </div>
        
    </div>
    );
    }
 
export default Home;