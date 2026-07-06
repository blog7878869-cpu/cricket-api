const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Cricket API is running 🚀",
    version: "1.0.0"
  });
});

app.get("/live", (req, res) => {
  res.json({
    success: true,
    matches: [
      {
        series: "Lanka Premier League",
        team1: "Jaffna Titans",
        team2: "Colombo Strikers",
        score: "145/3",
        overs: "16.4",
        status: "Live"
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
