import React from 'react';
import './Intro.css';
import banner from '../assets/banner.svg';

const intro = () => {
    return (
        <div className="flex-container" style ={ { backgroundImage: "url("+banner+")" } } >

            <div className="text-ban">
                <h4>Innovative Strategy World Class Delivery</h4>
                <p>Accelerating your business transformation and Cloud journey.</p>
            </div>
            <div className="banner">
                {/*<img className="banner-img" src={banner}/>*/}
            </div>
        </div>
    )
}

export default intro;
