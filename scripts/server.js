const express = require("express");
const path = require("path");
const app = express();
const port = 3000; // You can use any port you prefer

// Enable CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve JSON files from the 'translations' folder
app.get("/:languageCode.json", (req, res) => {
  const languageCode = req.params.languageCode;
  const filePath = path.join(__dirname, "translations", `${languageCode}.json`);

  try {
    const data = require(filePath);
    res.json(data);
  } catch (error) {
    console.error("Error loading language file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
