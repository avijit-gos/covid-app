import React from 'react'

function CountryCard({countryDate, countryactive, countryrecovered, countrydeath}) {
   let date = new Date(countryDate.lastUpdate);
   let update_date = date.toLocaleDateString() 
   return (
        <div className="card-box">
           <div className="confirmed">
              <p className="confirmed-text">active cases</p>
              <p className="confirmed-number">{countryactive.value}</p>
              <p className="update-time">{update_date}</p>
           </div>

           <div className="recovered">
              <p className="recovered-text">recovered cases</p>
              <p className="recovered-number">{countryrecovered.value}</p>
              <p className="update-time">{update_date}</p>
           </div>

           <div className="death">
              <p className="death-text">death cases</p>
              <p className="death-number">{countrydeath.value}</p>
              <p className="update-time">{update_date}</p>
           </div>
        </div>
    )
}

export default CountryCard
