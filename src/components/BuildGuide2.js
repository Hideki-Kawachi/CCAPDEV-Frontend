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
                <PCcomponent name='CPU' desc="Ryzen 5 3600, The 3rd Gen CPU of AMD provides enough power to its desired user and multi-core performance. It's perfect for streaming
                and gaming on the go. PCGuro recommends this as a better choice than the 5600G, if you want to utilize a card that uses PCIE 4.0"></PCcomponent>
                <PCcomponent name='Motherboard' desc='MSI MAG B550M PRO-VHD WIFI is a basic motherboard that allows you to plug n play without worrying
                for a BIOS update and also provides WIFI, if the user wants a cableless experience'></PCcomponent>
                <PCcomponent name='RAM' desc='We think that the Team Elite Vulcan TUF 16GB 2x8 3200mhz has enough power to match
                    the 5000 series CPU, even though that most users think that 3600mhz handles 5600G
                    in most applications and because Ryzen CPUs perform better in higher frequency.'></PCcomponent>
                <PCcomponent name='Storage' desc="SSDs or Solid State Drives are much more faster than your normal hard disk drives. 
                    In most cases 128 or 256gb isn't enough, so we mostly recommend getting in atleast 500GB 
                    or higher depending on your needs. The Kingston NV1 500GB NVME is a great option for budget
                    users and can be a great starter especially for bootup times"></PCcomponent>
                <PCcomponent name='GPU' desc='The GTX 1650 OC is a great combo with the 3600 as it can play 60fps for most e-sport titles'></PCcomponent>
                <PCcomponent name='PC Case' desc='The Fractal Design Meshify 2 Compact is easy to build into as it is more suited for PC builders that change components overtime '></PCcomponent>
                <PCcomponent name='PSU' desc="The MSI MAG-A650BN, 650W 80+ Bronze has enough power for both the CPU AND GPU as it holds less than 500W and is enough for a
                GPU upgrade such as an RTX 3060"></PCcomponent>   
            </div>

        </div>
        
    );
}

export default BuildGuide2;