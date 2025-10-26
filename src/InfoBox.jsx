import Card from "@mui/material/Card";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1200&auto=format&fit=crop&q=60";
  const COLD_URL =
    "https://images.unsplash.com/photo-1591420699297-88e82958f324?w=1200&auto=format&fit=crop&q=60";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=1200&auto=format&fit=crop&q=60";

  let weatherIcon;
  if (info.humidity > 80) {
    weatherIcon = (
      <ThunderstormIcon style={{ fontSize: 48, color: "#0077ff" }} />
    );
  } else if (info.temp > 30) {
    weatherIcon = <WbSunnyIcon style={{ fontSize: 48, color: "#ff9800" }} />;
  } else if (info.temp < 15) {
    weatherIcon = <AcUnitIcon style={{ fontSize: 48, color: "#00bcd4" }} />;
  } else {
    weatherIcon = <CloudIcon style={{ fontSize: 48, color: "#757575" }} />;
  }

  return (
    <div className="InfoBox">
      <Typography
        variant="h4"
        component="h1"
        className="weatherTitle"
        gutterBottom
      >
        Weather Info - {info.weather}
      </Typography>

      <div className="cardWrapper">
        <Card className="weatherCard">
          <CardMedia
            sx={{ height: { xs: 180, sm: 240, md: 300 } }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title={info.weather}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>

            <div className="iconBox">{weatherIcon}</div>

            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              className="weatherDetails"
            >
              <p>🌡️ Temperature: {info.temp}&deg;C</p>
              <p>💧 Humidity: {info.humidity}%</p>
              <p>🔻 Min Temp: {info.tempMin}&deg;C</p>
              <p>🔺 Max Temp: {info.tempMax}&deg;C</p>
              <p>
                🌥️ Feels like: {info.feels_like}&deg;C <br />
                Condition: <i>{info.weather}</i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
