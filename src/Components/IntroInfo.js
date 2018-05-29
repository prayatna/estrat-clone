import React from 'react';
import './IntroInfo.css';
import consult from '../assets/Consult.png';
import implement from '../assets/Implement.png';
import manage from '../assets/manage.png';


const introInfo = () => {
    return (
        <div className="slanted">
            Footer
            <div className="flex-container">
                <div>
                    <img className="flex-thumb" src ={consult} alt="consult"/>
                    <h4>Consult</h4>
                    <p>
                        Helping you make the right choices to solve critical business challenges
                    </p>
                    <p className="green-style">Find out more.</p>
                </div>
                <div>
                    <img className="flex-thumb" src={implement} alt="implement "/>
                    <h4> Implement</h4>
                <p>Implementing great IT solutions first time</p>
                    <p className="green-style">Find out more.</p>
                </div>
                <div>
                    <img className="flex-thumb" src={manage} alt = "manage "/>
                    <h4>Manage</h4>
                    <p>Monitoring managing and optimising your  IT platform</p>
                    <p className="green-style">Find out more.</p>
                </div>
            </div>

        </div>
    )
};

export default introInfo;