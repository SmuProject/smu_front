import React from 'react';
import './search.css';

// 맨왼쪽
function Info({photo,tier,point,winrate}){
    return(
    <div className='short'>
        <div className='pic'>{photo}</div>
        <div className='right'>
            <div className='tier'>{tier}</div>
            <div className='point'>{point}</div>
            <div className='winrate'>{winrate}</div>
        </div>
    </div>
    );
}

export default Info;
