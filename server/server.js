const express = require("express");
const fetch = require("node-fetch");
const app = express();

const url =
  "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

app.get("/api", async (req, res) => {
  try {
    const apiResponse = await fetch(url);
    const apiResponseJson = await apiResponse.json();
    res.send(apiResponseJson);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000!");
});
