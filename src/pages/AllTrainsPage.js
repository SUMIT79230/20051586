import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import TrainList from '../components/TrainList';
import api from '../apiConfig';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch all trains data from the API
    api.get('/trains')
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <>
      <Typography variant="h3">All Trains Schedule</Typography>
      {trains.length > 0 ? <TrainList trains={trains} /> : <Typography variant="body1">Loading...</Typography>}
    </>
  );
};

export default AllTrainsPage;
