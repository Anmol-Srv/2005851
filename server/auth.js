// require('dotenv').config();
// const axios = require('axios');

// // const getAuthToken = async () => {
// //   const response = await axios.post('http://20.244.56.144/train/auth', {
// //     companyName: process.env.COMPANY_NAME,
// //     clientID: process.env.CLIENT_ID,
// //     ownerName: process.env.OWNER_NAME,
// //     ownerEmail: process.env.OWNER_EMAIL,
// //     rollNo: process.env.ROLL_NO,
// //     clientSecret: process.env.CLIENT_SECRET
// //   });
// //   return response.data['access_token'];
// // };
// const getAuthToken = async () => {
//   const response = await axios.post('http://20.244.56.144/train/auth', {
//     companyName: process.env.COMPANY_NAME,
//     ownerName: process.env.OWNER_NAME,
//     rollNo: process.env.ROLL_NO,
//     ownerEmail: process.env.OWNER_EMAIL,
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET
//   });
//   // console.log(response.data);  
//   return response.data['access_token'];  // Adjust this line based on the logged output
// };

// module.exports = { getAuthToken };
require('dotenv').config();
const axios = require('axios');

const getAuthToken = async () => {
  const response = await axios.post('http://20.244.56.144/train/auth', {
    companyName: process.env.COMPANY_NAME,
    ownerName: process.env.OWNER_NAME,
    rollNo: process.env.ROLL_NO,
    ownerEmail: process.env.OWNER_EMAIL,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });
  console.log(response.data);
  return response.data;
};

module.exports = { getAuthToken };