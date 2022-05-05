import React from 'react';
import { Link } from 'react-router-dom';

const Home =()=> {
    return (
    <div className='content-home'>

        <div className="sub-container">
        </div>

        <div className="name-container">
            <span className="website-name">PCGuro</span>
        </div>

        <div className="main-section-container">
            <div className='main-section-text'>
                <Link className='main-section-nav-button' to={'/Forum'} state={"Technical Issues"}>Technical Issues</Link>
                <Link className='main-section-nav-button' to={'/Forum'} state={"Rate My Build"}>Rate My Build</Link>
                <Link className='main-section-nav-button' to={'/Forum'} state={"Build Suggestions"}>Build Suggestions</Link>
                <Link className='main-section-nav-button' to={'/Forum'} state={"Tips and Tricks"}>Tips and Tricks</Link>
                <Link className='main-section-nav-button' to={'/Forum'} state={"General Discussion and Trends"}>General Discussions and Trends</Link>
                <Link className='main-section-nav-button' to={'/Forum'} state={"News"}>News</Link>
            </div>
        </div>

        <div className="pcguro-build-guide-container">
            <div className="pcguro-builds-section">
                <div className="span-box">
                    Build Guides
                </div>
                <div className="pc-build-box">
                    <Link id="bGuide" className='nav-button' to={'/BuildGuidePost'}> 
                        <div className='build-title'>
                            <span className='title-text'>Entry-Level Build</span>
                            <div> <span className='title-text'>P30,000</span>   </div>  
                        </div>
                        <div className='pic-container'>
                            <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                        </div>
                    </Link>
                </div>

                <div className="pc-build-box">
                    <Link id="bGuide2" className='nav-button' to={'/BuildGuide2'}> 
                        <div className='build-title'>
                            <span className='title-text'>Midrange Build</span>
                            <div> <span className='title-text'>P50,000</span>   </div>  
                        </div>
                        <div className='pic-container'>
                            <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                        </div>
                    </Link>
                </div>

                <div className="pc-build-box">
                    <Link id="bGuide3" className='nav-button' to={'/BuildGuide3'}> 
                        <div className='build-title'>
                            <span className='title-text'>High-End Build</span>
                            <div> <span className='title-text'>P70,000</span>   </div>  
                        </div>
                        <div className='pic-container'>
                            <img className="pc-image" src={require('../media/pc-image.png')} alt="pic" />
                        </div>
                    </Link>
                </div>


            </div>
            
        </div>
        
    </div>
    );
    }
 
export default Home;