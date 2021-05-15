import axios from 'axios';
import Chart from './Global/Chart';
import React,{useState, useEffect} from 'react'
import Card from './Global/Card';
import CountryCard from './Country/Card'
import CountryChart from './Country/Chart';
function Main() {
    //global card datas..
    const [totalCases, setTotalCases] = useState({});
    const [active, setActive] = useState({});
    const [recovered, setRecovered] = useState({});
    const [death, setDeath] = useState({});

    //coutry wise covid datas...
    const [counbtryCases, setCountryCases] = useState({});
    const [countryactive, setcountryActive] = useState({});
    const [countryrecovered, setcountryRecovered] = useState({});
    const [countrydeath, setcountryDeath] = useState({});
    const [countryDate, setCountryData] = useState({})

    //country name list array...
    const [countryList, setCountryList] = useState([]);

    //fetchin API data..
    useEffect(()=>{
        axios.get("https://covid19.mathdro.id/api")
        .then(response1 => {
            setTotalCases(response1.data);
            setActive(response1.data.confirmed);
            setRecovered(response1.data.recovered);
            setDeath(response1.data.deaths);

            //change picker list API...
            axios.get("https://covid19.mathdro.id/api/countries")
            .then(response2 => {
                setCountryList(response2.data.countries);
            })
            .catch(error => {
                console.log("Error: Ooops! something went wrong in county list")
            })
        })
        .catch(error => {
            alert("Error: Ooops! something went wrong in Card API")
        })
    }, []);

    //changeCountry function...
    const changeCountry = (e) => {
        let countryName = e.target.value;
        
        //fetching country covid data..
        axios.get(`https://covid19.mathdro.id/api/countries/${countryName}`)
        .then(response3 =>{
            setCountryData(response3.data)
            setcountryActive(response3.data.confirmed);
            setcountryRecovered(response3.data.recovered);
            setcountryDeath(response3.data.deaths)
            setCountryCases(response3.data)
        })
        .catch(error => {
            alert('Error: We could not fetch Country covid details.')
        })
    }
    return (
        <div className="container">
            <div className="header">
            <div className="image">
            </div>
                <p>Covid19 tracker app</p>
                <select className="country-picker" onChange={changeCountry}>
                   <option>Global</option>
                   {
                    countryList.map(name => <option key={name.name} value={name.name}>{name.name}</option>)
                   }
                </select>
            </div>
            {
                counbtryCases.confirmed !== undefined 
                ? <div>
                      <CountryCard countryDate={countryDate} countryactive={countryactive} countryrecovered={countryrecovered} countrydeath={countrydeath} />
                      <CountryChart countryactive={countryactive} countryrecovered={countryrecovered} countrydeath={countrydeath} />
                  </div>  
                : <div>
                   <Card totalCases={totalCases} active={active} recovered={recovered} death={death} />
                   <Chart active={active} recovered={recovered} death={death} />
                  </div>
            }
        </div>
    )
}

export default Main
