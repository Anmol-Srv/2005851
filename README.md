# Train Schedule Display Application

This application is designed to display real-time train schedules along with seat availability and prices. The data is fetched from a provided API and processed to deliver the most relevant information to the user.

## Project Structure

The project is divided into a backend and a frontend.

### Backend

The backend is a Node.js application that serves as a middleware between the frontend and the provided API. It is responsible for fetching the data from the API, processing it, and providing it to the frontend in a suitable format.

#### Important Files

- `server.js`: This is the main file for the backend. It sets up the server and the route for fetching trains.
- `auth.js`: This file is responsible for authenticating with the provided API and getting an access token.
- `trains.js`: This file fetches the train data from the API and processes it according to the requirements.

### Frontend

The frontend is a React application that displays the processed data from the backend to the user in an easy-to-understand format.

#### Important Files

- `App.js`: This is the main file for the frontend. It sets up the routes for the application.
- `TrainList.js`: This file fetches the data from the backend and displays a list of all trains.
- `TrainDetails.js`: This file displays detailed information about a single train.

## Setup and Installation

1. Clone this repository.
2. Install the dependencies for both the frontend and the backend using `npm install`.
3. Start the backend server using `node server.js`.
4. Start the frontend application using `npm start`.

## Usage

After setting up the application, you can navigate to `http://localhost:3000` in your browser to view the train schedules.

## Notes

- Trains departing in the next 30 minutes are ignored.
- Trains are displayed in the ascending order of price, descending order of tickets, and descending order of departure time (after considering delays in minutes).
- The prices and seat availability of all tickets are subject to change based on market conditions such as demand, supply, and departure time.
- The server is built to be performant, providing users with a timely and effective response in the shortest possible time.
