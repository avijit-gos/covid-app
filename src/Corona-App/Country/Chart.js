import React from 'react'
import {Doughnut} from 'react-chartjs-2';

function CountryChart({countryactive, countryrecovered, countrydeath}) {
    let activeCase = countryactive.value;
    let recoveredCase = countryrecovered.value;
    let deathCase = countrydeath.value;

    const data = {
        labels: ["Confirmed Cases", "Recovered Cases", "Death Cases"],
        datasets: [
            {
                labels: "Corona Cases",
                data: [activeCase, recoveredCase, deathCase],
                backgroundColor: ['rgba(72, 52, 212,1.0)', 'rgba(106, 176, 76,1.0)', 'rgba(235, 77, 75,1.0)'],
                borderColor: ['rgba(72, 52, 212,1.0)', 'rgba(106, 176, 76,1.0)', 'rgba(235, 77, 75,1.0)']
            }
        ]
    }
    return (
        <div>
            <Doughnut data={data} options={{ maintainAspectRatio: false }} width={100} height={400} />
        </div>
    )
}

export default CountryChart
