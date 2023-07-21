import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { Link } from 'react-router-dom';
    import { List, ListItem, ListItemText } from '@material-ui/core';

    function TrainList() {
      const [trains, setTrains] = useState([]);

      useEffect(() => {
        const fetchTrains = async () => {
          const response = await axios.get('http://localhost:3002/trains');
          setTrains(response.data);
        };
        fetchTrains();
      }, []);

      return (
        <List>
          {trains.map(train => (
            <ListItem key={train.trainNumber} button component={Link} to={`/train/${train.trainNumber}`}>
              <ListItemText primary={train.trainName} secondary={`Train Number: ${train.trainNumber}`} />
            </ListItem>
          ))}
        </List>
      );
    }

    export default TrainList;