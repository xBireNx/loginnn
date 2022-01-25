import React, {useEffect, useState} from 'react';
import './Covid.css'
function Covid() {
    const [data, setData] = useState([])
    const getCovidData = async() => {
      fetch('https://data.covid19india.org/data.json').then(function(response){
        response.json().then(function(getCovidData) {
            // console.log("second way");
            console.log(getCovidData.statewise[0]);
            setData(getCovidData.statewise[0])
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
    }
    
    useEffect(() => {
     getCovidData();
    }, []);
    
  return (<div>
      <h1>India's Covid Data</h1>
      <ul>
          <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>Totla Confirmed</p>
                    <p className='card__total card__small'>{data.confirmed}</p>
                </div>
            </div>
          </li>
          <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>Total Death</p>
                    <p className='card__total card__small'>{data.deaths}</p>
                </div>
            </div>
          </li>
          <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>Total Recovered</p>
                    <p className='card__total card__small'>{data.recovered}</p>
                </div>
            </div>
          </li>
      </ul>
      <div></div>
  </div>);
}

export default Covid;
