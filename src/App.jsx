import { useEffect, useState } from 'react'
import './App.css'

/* Images */
import searchIcon from './assets/search.png'
import clearskyIcon from './assets/clearsky.png'
import humidityIcon from './assets/humidity.png'
import rainyIcon from './assets/rainy.png'
import snowIcon from './assets/snow.png'
import scattercloudIcon from './assets/scattercloud.png'
import thunderstormIcon from './assets/thunderstorm.png'
import windIcon from './assets/wind.png'

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
  return(
    <>
    <div className='image'>
      <img src={icon} alt='Image'></img>
    </div>
    <div className="temp">{temp} °C</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className='lat'>Latitude</span>
        <span>{lat}</span>
      </div>
      <div>
        <span className='log'>Longitude</span>
        <span>{log}</span>
      </div>
    </div>
    <div className="data-container">
      <div className="element">
        <img src={humidityIcon} className='icon' alt='humidity'></img>
        <div className="data">
          <div className="humidity-percent">{humidity} %</div>
            <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={windIcon} className='icon' alt='wind'></img>
        <div className="data">
          <div className="wind-percent">{wind} km/hr</div>
            <div className="text">Wind</div>
        </div>
      </div>
    </div>
    </>
  )
}


function App() {
  let api_key = "your key"
  const [text, setText] = useState('Chennai')

  const [icon, setIcon] = useState(rainyIcon)
  const [temp, setTemp] = useState(0)
  const [city, setCity] = useState('Chennai')
  const [country, setCountry] = useState('IN')
  const [lat, setLat] = useState(0)
  const [log, setLog] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [wind, setWind] = useState(0)

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const weatherIconMap = {
    "01d": clearskyIcon,
    "01n": clearskyIcon,
    "02d": clearskyIcon,
    "02n": clearskyIcon,
    "03d": clearskyIcon,
    "03n": clearskyIcon,
    "04d": scattercloudIcon,
    "04n": scattercloudIcon,
    "09d": rainyIcon,
    "09n": rainyIcon,
    "10d": rainyIcon,
    "10n": rainyIcon,
    "11d": thunderstormIcon,
    "11n": thunderstormIcon,
    "13d": snowIcon,
    "13n": snowIcon,
    // "50d": foggyIcon,
    // "50n": foggyIcon,
  }

  const search = async () => {
    setLoading(true);
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`

    try{
      let response = await fetch(url)
      let data = await response.json()
      // console.log(data)
      if (data.cod === '404'){
        console.error("City Not Found")
        setCityNotFound(true)
        setLoading(false)
        return
      }
      const weatherIconCode = data.weather[0].icon
      setIcon(weatherIconMap[weatherIconCode] || clearskyIcon)
      setCityNotFound(false)
      setTemp(Math.floor(data.main.temp))
      setCity(data.name)
      setCountry(data.sys.country)
      setLat(data.coord.lat)
      setLog(data.coord.lon)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      }catch(error){
        console.error('An Error Occurred: ',error.message)
        setError("An Error Occur While Fetching Data!")
        }
        finally{
          setLoading(false)
        }
    }

  const handleCity = (e) => {
    setText(e.target.value)
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search()
      }
  }

  useEffect(function () {
    search();
    }, []);

  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type='text' 
          className='cityInput' 
          placeholder='Search for a city' 
          onChange={handleCity}
          value={text}
          onKeyDown={handleKeyDown} />
          <div className='search-icon' onClick={ () => search()} >
          <img src={searchIcon} alt='search icon' />
          </div>
        </div>
      

      {loading && <div className='loading-message'>Loading.....</div>}
      {error && <div className='error-message'>{error}</div>}
      {cityNotFound && <div className='city-not-found'>City Not Found</div>}

      {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />}

      <p className='footer'>
        Designed by <span> Sadham Hussain </span>
      </p>
      </div>
    </>
  )
}

export default App
