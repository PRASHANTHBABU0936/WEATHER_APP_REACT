import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1a032877ab02f50382245ce448a174f0";

let getWeatherInfo = async (customCity = null) => {
        try{
            setError(false); 

const cityName = customCity || city;
let response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);  
let result = {
    city: city,
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
humidity:jsonResponse.main.humidity,
feels_like :jsonResponse.main.feels_like,
weather:jsonResponse.weather[0].description,
};
console.log(result);
return result;}
catch(err){
throw err;}
        

    };

    let handleChange = (evt) => {
         setCity(evt.target.value);
        if (error) setError(false); 
    };

    let handleSubmit = async(evt) => {
        try{ evt.preventDefault();
        console.log(city);
        setCity(""); 
            let newInfo =  await getWeatherInfo(); 
    updateInfo(newInfo);} catch(err){
setError(true);
    }
       
        };
        const handleVoiceSearch = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Your browser does not support Speech Recognition");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = async (event) => {
    const spokenCity = event.results[0][0].transcript;
    console.log("Voice Input:", spokenCity);
const cleanedCity = spokenCity.replace(/[^\w\s]/gi, "");  // removes punctuation
setCity(cleanedCity);
    

    // Automatically submit after setting city
    const newInfo = await getWeatherInfo(spokenCity);
    if (newInfo) {
      updateInfo(newInfo);
      setCity("");
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
    alert("Voice input failed. Please try again.");
  };
};


    return (
        <div className='SearchBox'>
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
               <Button variant="contained" type="submit" style={{ margin: '7px' }}>
                Search
           </Button>

<Button
  variant="outlined"
  type="button"
  onClick={handleVoiceSearch}
  style={{ margin: '7px' }}
>
  🎤 Speak City
</Button>

{error && <p style={{ color: "red" }}>No Such place exists</p>}
            </form>
        </div>
    );
}
