import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { useParams } from 'react-router-dom';
    import { Card, CardContent, Typography } from '@material-ui/core';

    function TrainDetail() {
      const { trainNumber } = useParams();
      const [train, setTrain] = useState(null);

      useEffect(() => {
        const fetchTrain = async () => {
          const response = await axios.get(`http://localhost:3002/train/${trainNumber}`);
          setTrain(response.data);
        };
        fetchTrain();
      }, [trainNumber]);

      return train ? (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">{train.trainName}</Typography>
            <Typography color="textSecondary">{`Train Number: ${train.trainNumber}`}</Typography>
            <Typography color="textSecondary">{`Departure Time: ${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</Typography>
            <Typography color="textSecondary">{`Delayed By: ${train.delayedBy} minutes`}</Typography>
            <Typography color="textSecondary">{`Seats Available - Sleeper: ${train.seatsAvailable.sleeper}, AC: ${train.seatsAvailable.AC}`}</Typography>
            <Typography color="textSecondary">{`Price - Sleeper: ${train.price.sleeper}, AC: ${train.price.AC}`}</Typography>
          </CardContent>
        </Card>
      ) : null;
    }

    export default TrainDetail;