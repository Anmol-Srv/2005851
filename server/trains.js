// const axios = require('axios');

// // const getAllTrains = async (token) => {
// //   const response = await axios.get('http://20.244.56.144/train/trains', {
// //     headers: { Authorization: `Bearer ${token}` }
// //   });
// //   return response.data;
// // };
// const getAllTrains = async (token) => {
//   console.log('Token:', token);  // Add this line
//   const response = await axios.get('http://20.244.56.144/train/trains', {
//     headers: { Authorization: `Bearer ${token}` }
//   });
//   return response.data;
// };
// const processTrains = (trains) => {
//   // TODO: Implement the train data processing logic based on the problem requirements
//   return trains;
// };

// module.exports = { getAllTrains, processTrains };
const axios = require('axios');

const getAllTrains = async (token) => {
  console.log('Token:', token);  // Add this line
  const response = await axios.get('http://20.244.56.144/train/trains', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

// const processTrains = (trains) => {
//   // TODO: Implement the train data processing logic based on the problem requirements
//   return trains;
// };
const processTrains = (trains) => {
  const currentTime = new Date();
  currentTime.setSeconds(0);
  currentTime.setMilliseconds(0);

  return trains
    // Ignore trains departing in the next 30 minutes
    .filter(train => {
      const departureTime = new Date();
      departureTime.setHours(train.departureTime.Hours, train.departureTime.Minutes - train.delayedBy, train.departureTime.Seconds);
      return departureTime.getTime() > (currentTime.getTime() + 30*60*1000);
    })
    // Sort by price (ascending), tickets (descending), and departure time (descending)
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