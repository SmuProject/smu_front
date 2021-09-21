import React from 'react';
import {VictoryBar} from 'victory';


function Ograph3(){
    const data = [
        { vacationSpot: "산", vote: 30 },

      ];

    const Chart = () => {
        return (
          <div>
            <VictoryBar horizontal data={data} x="vacationSpot" y="vote" />
          </div>
        );
      };


    return(
        <div className='firstline5'>
            <div className='Ograph3'>
                <div className='OGraph3'>
                <VictoryBar horizontal data={data} x="vacationSpot" y="vote" width='250'
                height='30' barWidth='20' style={{data: { fill: "#f0abbc" }}}  maxDomain={{ y: 40 }}/>
                </div>
            </div>
        </div>
    );
}

export default Ograph3;
