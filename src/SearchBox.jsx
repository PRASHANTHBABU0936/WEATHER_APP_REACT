import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;


  // ✅ Fetch weather info from OpenWeatherMap API
  const getWeatherInfo = async (customCity = null) => {
    try {
      setError(false);
      const cityName = customCity || city;

      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) throw new Error("City not found");

      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      console.log("✅ Weather Data:", result);
      return result;
    } catch (err) {
      console.error("❌ Error fetching weather:", err);
      throw err;
    }
  };

  // ✅ Handle manual text input
  const handleChange = (evt) => {
    setCity(evt.target.value);
    if (error) setError(false);
  };

  // ✅ Handle manual submit
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch {
      setError(true);
    }
  };

  // ✅ Handle Voice Search
  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

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
      console.log("🎤 Voice Input:", spokenCity);

      const cleanedCity = spokenCity.replace(/[^\w\s]/gi, "").trim();
      setCity(cleanedCity);

      try {
        const newInfo = await getWeatherInfo(cleanedCity);
        updateInfo(newInfo);
        setCity("");
      } catch {
        setError(true);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      alert("Voice input failed. Please try again.");
    };
  };

  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{
            width: { xs: "90%", sm: "70%" },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Button variant="contained" color="primary" type="submit">
            🔍 Search
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            type="button"
            onClick={handleVoiceSearch}
          >
            🎤 Speak City
          </Button>
        </Box>

        {error && (
          <Typography
            variant="body2"
            sx={{ color: "red", mt: 1, textAlign: "center" }}
          >
            ❌ No such place exists. Please try again.
          </Typography>
        )}
      </form>
    </Box>
  );
}
