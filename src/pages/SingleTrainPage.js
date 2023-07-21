import React, { useEffect, useState } from 'react';
import { useParams, Typography } from '@mui/material';
import TrainCard from '../components/TrainCard';
import api from '../apiConfig';

const SingleTrainPage = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch data of a specific train from the API
    api.get(`/trains/${trainNumber}`)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, [trainNumber]);

  return (
    <>
      {train ? <TrainCard train={train} /> : <Typography variant="body1">Loading...</Typography>}
    </>
  );
};

export default SingleTrainPage;
