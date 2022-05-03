import React from 'react';

const BuildGuidePost =()=> {
    return (
        <div classNameName="content-">
            <div className='sub-container'>Guide</div>
            <div className='header-container'>Entry-Level Build</div>
            <div className='description-container'>
                <h2 className='cmpnt-name'>CPU</h2>
                <p classname='cmpnt-desc'>
                    The Ryzen 5 5600G is known for its decent performance without discrete graphics
                </p>
                <h2 className='cmpnt-name'>Motherboard</h2>
                <p classname='cmpnt-desc'>
                    Meeting the price criteria, We chose the MSI B450M Mortar Max for its better thermal solution
                    and it can also support DDR4 RAM upto 4133Mhz. The only catch of this budget board is that
                    you would need to update the BIOS for Ryzen 5000 series.
                </p>
                <h2 className='cmpnt-name'>RAM</h2>
                <p classname='cmpnt-desc'>
                    We think that the Team Elite Vulcan TUF 16GB 2x8 3200mhz has enough power to match
                    the 5000 series CPU, even though that most users think that 3600mhz handles 5600G
                    in most applications and because Ryzen CPUs perform better in higher frequency.
                </p>
                <h2 className='cmpnt-name'>Storage</h2>
                <p classname='cmpnt-desc'>
                    SSDs or Solid State Drives are much more faster than your normal hard disk drives. 
                    In most cases 128 or 256gb isn't enough, so we mostly recommend getting in atleast 500GB 
                    or higher depending on your needs. The Kingston NV1 500GB NVME is a great option for budget
                    users and can be a great starter especially for bootup times
                </p>
                <h2 className='cmpnt-name'>PC Case</h2>
                <p classname='cmpnt-desc'>
                    Rakk is known for its local components and peripherals here in the Philippines. 
                    We think that its fit especially for those who want to go with black or white
                    budget builds. 
                </p>
                <h2 className='cmpnt-name'>PSU</h2>
                <p classname='cmpnt-desc'>
                    A (Corsair CV500) 80+ Bronze PSU is certainly enough, especially for a build that's only going to
                    use integrated graphics or for a budget GPU to be added in the future. You may opt
                    for a higher quality PSU for reliability and futureproofing.
                </p>
            
            </div>

        </div>
        
    );
}

export default BuildGuidePost;