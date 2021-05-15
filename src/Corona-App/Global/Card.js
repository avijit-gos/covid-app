import React from 'react';
import CountUp from 'react-countup';

function Card({totalCases, active, recovered, death}) {
   let date = new Date(totalCases.lastUpdate);
   let update_date = date.toLocaleDateString()
    return (
        <div className="card-box">
           <div className="confirmed">
              <p className="confirmed-text">active cases</p>
              <p className="confirmed-number">{active.value}</p>
              <p className="update-time">{update_date}</p>
           </div>

           <div className="recovered">
              <p className="recovered-text">recovered cases</p>
              <p className="recovered-number">{recovered.value}</p>
              <p className="update-time">{update_date}</p>
           </div>

           <div className="death">
              <p className="death-text">death cases</p>
              <p className="death-number">{death.value}</p>
              <p className="update-time">{update_date}</p>
           </div>
        </div>
    )
}

export default Card
