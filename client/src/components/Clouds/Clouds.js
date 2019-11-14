import React from 'react';
import './Clouds.scss';

const Clouds = () => {
    let clouds = [];
    for (let i = 1; i <= 10; i++) {
        clouds.push('x' + i);
    }
    clouds = clouds.map((cloud) => 
        <div className={`cloud ${cloud}`} key={cloud}></div>
    );
    return (
        <div className="clouds">
            {clouds}
        </div>
    )
};

export default Clouds;