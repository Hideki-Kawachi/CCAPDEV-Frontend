import React from 'react';
import PCcomponent from './PCcomponent';

const BuildGuide3 =()=> {
    return (
        <div classNameName="content-">
            <div className='sub-container'>Guide</div>
            <div className='header-container'>Kinda High-End Build</div>
            <div className='img-container'>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/5800x.jpg')} />               </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/cm-ml240l.jpg')} />               </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/aoruspro-b550.jpg')} />     </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/vulcan-tuf-16gb.jpg')} />      </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/kingston-nv1-500gb.jpg')} />   </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/3060ti-ocv1.jpg')} />         </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/fd-meshify2.jpg')} />         </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/ss-titanium850.jpg')} />       </div>
            </div>
            <div className='description-container'>
                <PCcomponent name='CPU' desc='AMD Ryzen 7 5800X has 8 cores and 12 threads, enough for CPU-intensive tasks and even FPS Gaming (Could probably get you more than 300FPS in Valorant :D)'></PCcomponent>
                <PCcomponent name='CPU-Cooler' desc='Cooler Master ML240L aRGB v2 - for a quieter cooling experience even with the heaviest tasks like rendering or 3D modelling'></PCcomponent>
                <PCcomponent name='Motherboard' desc='Gigabyte B550 Aorus Pro is equipped with the latest technology and even a HI-FI Audio Systeem
                for a quality experience for gamers and audiophiles.  '></PCcomponent>
                <PCcomponent name='RAM' desc='We think that the Team Elite Vulcan TUF 16GB 2x8 3200mhz has enough power to match
                    the 5000 series CPU, even though that most users think that 3600mhz handles 5600G
                    in most applications and because Ryzen CPUs perform better in higher frequency.'></PCcomponent>
                <PCcomponent name='Storage' desc="SSDs or Solid State Drives are much more faster than your normal hard disk drives. 
                    In most cases 128 or 256gb isn't enough, so we mostly recommend getting in atleast 500GB 
                    or higher depending on your needs. The Kingston NV1 500GB NVME is a great option for budget
                    users and can be a great starter especially for bootup times"></PCcomponent>
                <PCcomponent name='GPU' desc='MSI RTX 3060TI Ventus 2x OC OCV1 - As GPU prices are still above retail prices in most local stores, we can only recommend atleast
                a 3060TI for the average joe going for this price point. With RTX enabled, users can take advantage of ray tracing in some games that support it. '></PCcomponent>
                <PCcomponent name='PC Case' desc='The Fractal Design Meshify 2 Compact is easy to build into as it is more suited for PC builders that change components overtime '></PCcomponent>
                <PCcomponent name='PSU' desc=" Seasonic Prime Ultra SSR-850 - A fully modular PSU and also a Titanium rating means a long term investment for components in this desktop. If you're planning
                to run the PC at max wattage, this is the best choice as it provides more efficiency and less wasted electricity.
                 "></PCcomponent>   
            </div>

        </div>
        
    );
}

export default BuildGuide3;