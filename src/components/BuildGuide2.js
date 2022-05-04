import React from 'react';
import PCcomponent from './PCcomponent';

const BuildGuide2 =()=> {
    return (
        <div classNameName="content-">
            <div className='sub-container'>Guide</div>
            <div className='header-container'>Mid-Range Build</div>
            <div className='img-container'>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/3600.jpeg')} />               </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/msi-b550m-wifi.png')} />     </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/vulcan-tuf-16gb.jpg')} />      </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/kingston-nv1-500gb.jpg')} />   </div>
                <div class='img-block'>    <img className='cmpnt-img' src={require('../media/gigabyte-1650oc.jpeg')} /> </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/fd-meshify2.jpg')} />         </div>
                <div class='img-block'> <img className='cmpnt-img' src={require('../media/msi-a650bn.jpeg')} />       </div>
            </div>
            <div className='description-container'>
                <PCcomponent name='CPU' desc='Ryzen 5 3600'></PCcomponent>
                <PCcomponent name='Motherboard' desc='MSI MAG B550M PRO-VHD WIFI'></PCcomponent>
                <PCcomponent name='RAM' desc='We think that the Team Elite Vulcan TUF 16GB 2x8 3200mhz has enough power to match
                    the 5000 series CPU, even though that most users think that 3600mhz handles 5600G
                    in most applications and because Ryzen CPUs perform better in higher frequency.'></PCcomponent>
                <PCcomponent name='Storage' desc="SSDs or Solid State Drives are much more faster than your normal hard disk drives. 
                    In most cases 128 or 256gb isn't enough, so we mostly recommend getting in atleast 500GB 
                    or higher depending on your needs. The Kingston NV1 500GB NVME is a great option for budget
                    users and can be a great starter especially for bootup times"></PCcomponent>
                <PCcomponent name='GPU' desc='GTX 1650'></PCcomponent>
                <PCcomponent name='PC Case' desc=' '></PCcomponent>
                <PCcomponent name='PSU' desc=" MSI MAG-A650BN, 650W 80+ Bronze"></PCcomponent>   
            </div>

        </div>
        
    );
}

export default BuildGuide2;