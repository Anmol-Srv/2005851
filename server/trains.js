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

const processTrains = (trains) => {
  // TODO: Implement the train data processing logic based on the problem requirements
  return trains;
};

module.exports = { getAllTrains, processTrains };