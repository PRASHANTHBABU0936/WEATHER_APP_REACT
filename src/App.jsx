import React, { useState } from "react";
import { Container, Box, Typography, Card, Grid } from "@mui/material";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./App.css"; // make sure this imports your CSS

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 32,
    temp: 30,
    tempMin: 25,
    tempMax: 35,
    humidity: 70,
    weather: "clear sky",
  });

  const updateInfo = (result) => setWeatherInfo(result);

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        mt: 5,
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Card
        className="card"
        sx={{
          mx: "auto",
          p: { xs: 2, sm: 3, md: 4 },
          width: "100%",
          borderRadius: 4,
          background: "linear-gradient(135deg, #83a4d4, #b6fbff)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "translateY(-5px)" },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
          }}
        >
          🌤️ Weather App
        </Typography>

        {/* 📱 Mobile: stacked | 💻 Desktop: side-by-side */}
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={5}>
            <SearchBox updateInfo={updateInfo} />
          </Grid>

          <Grid item xs={12} md={7}>
            <InfoBox info={weatherInfo} />
          </Grid>
        </Grid>
      </Card>

      <Typography
        sx={{
          mt: 3,
          color: "rgba(0,0,0,0.6)",
          fontSize: { xs: "0.85rem", sm: "0.95rem" },
        }}
      >
        – Designed mobile-first UI with Material UI, tested across 10+ device types for optimal experience.
      </Typography>
    </Container>
  );
}
