const express = require('express');
const cors = require('cors');
const { getAuthToken } = require('./auth');
const { getAllTrains, processTrains } = require('./trains');

const app = express();
const port = 3002;
//This is to allow communication between local host servers
app.use(cors());

let accessToken = null;
let tokenExpiration = null;

const getAccessToken = async () => {
  // If the token is not expired, return it
  if (accessToken && Date.now() < tokenExpiration) {
    return accessToken;
  }

  // Otherwise, request a new token
  const authResponse = await getAuthToken();

  // Save the new token and its expiration time
  accessToken = authResponse['access_token'];
  tokenExpiration = Date.now() + authResponse['expires_in'] * 1000;
  // console.log(accessToken);
  // console.log(tokenExpiration);
  return accessToken;
};

app.get('/trains', async (req, res) => {
  try {
    const token = await getAccessToken();
    const rawTrains = await getAllTrains(token);
    const processedTrains = processTrains(rawTrains);
    res.json(processedTrains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});