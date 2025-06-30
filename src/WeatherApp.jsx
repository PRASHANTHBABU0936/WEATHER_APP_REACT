 import InfoBox from "./InfoBox";
 import SearchBox from "./SearchBox";
import { useState } from "react";
 
export default function(){
    const [weatherInfo,setweatherInfo] = useState({
            city:"Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
    });

    let  updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }
    return (<div style={{textAlign:"center"}}><h2>WEATHER APP</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info = {weatherInfo}/>
        </div>
    );

}