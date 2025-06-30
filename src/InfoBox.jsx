import Card from '@mui/material/Card';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';

// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}) {
  const IMG_URL = "https://images.unsplash.com/photo-1746962321201-2bb6239e2a9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
 const HOT_URL = " https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
 const COLD_URL = "https://images.unsplash.com/photo-1591420699297-88e82958f324?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D ";
 const  RAIN_URL = " https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

 let weatherIcon;
if (info.humidity > 80) {
  weatherIcon = <ThunderstormIcon style={{ fontSize: 40, color: 'blue' }} />;
} else if (info.temp > 30) {
  weatherIcon = <WbSunnyIcon style={{ fontSize: 40, color: 'orange' }} />;
} else if (info.temp < 15) {
  weatherIcon = <AcUnitIcon style={{ fontSize: 40, color: 'skyblue' }} />;
} else {
  weatherIcon = <CloudIcon style={{ fontSize: 40, color: 'gray' }} />;
}

  return (
    <>
      <div className="InfoBox">
        <h1>WeatherInfo - {info.weather}</h1>
      
<div className="cardContainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ?  RAIN_URL : (info.temp > 15) ? HOT_URL:COLD_URL}
        title="green iguana"
      />
  <CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {info.city}
  </Typography>
  <div>{weatherIcon}</div>
  <Typography variant="body2" color="text.secondary" component={"span"}>
    <p>Temperature={info.temp}&deg;C</p>
    <p>Humidity={info.humidity}</p>
    <p>Min Temp ={info.tempMin}&deg;C</p>
    <p>Max Temp = {info.tempMax}&deg;C</p>
    <p>
      Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}
    </p>
  </Typography>
</CardContent>
{/* <CardActions>
  <Button size="small">Share</Button>
  <Button size="small">Learn More</Button>
</CardActions> */}
</Card></div></div>
    </>
  );
}
