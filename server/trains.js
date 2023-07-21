const axios = require('axios');

const getAllTrains = async (token) => {
  // console.log('Token:', token);
  const response = await axios.get('http://20.244.56.144/train/trains', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

//Logic for displaying the Train data according to the problem statement
const processTrains = (trains) => {
  const currentTime = new Date();
  currentTime.setSeconds(0);
  currentTime.setMilliseconds(0);

  return trains
    .filter(train => {
      const departureTime = new Date();
      departureTime.setHours(train.departureTime.Hours, train.departureTime.Minutes - train.delayedBy, train.departureTime.Seconds);
      return departureTime.getTime() > (currentTime.getTime() + 30*60*1000);
    })

    .sort((a, b) => {
      const aPrice = Math.min(a.price.sleeper, a.price.AC);
      const bPrice = Math.min(b.price.sleeper, b.price.AC);
      if (aPrice !== bPrice) return aPrice - bPrice;

      const aTickets = a.seatsAvailable.sleeper + a.seatsAvailable.AC;
      const bTickets = b.seatsAvailable.sleeper + b.seatsAvailable.AC;
      if (aTickets !== bTickets) return bTickets - aTickets;

      const aDepartureTime = new Date();
      aDepartureTime.setHours(a.departureTime.Hours, a.departureTime.Minutes - a.delayedBy, a.departureTime.Seconds);
      const bDepartureTime = new Date();
      bDepartureTime.setHours(b.departureTime.Hours, b.departureTime.Minutes - b.delayedBy, b.departureTime.Seconds);
      return bDepartureTime.getTime() - aDepartureTime.getTime();
    });
};

module.exports = { getAllTrains, processTrains };