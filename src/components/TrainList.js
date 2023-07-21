
import React from 'react';
import { Grid } from '@mui/material';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  return (
    <Grid container spacing={2}>
      {trains.map((train) => (
        <Grid item key={train.trainNumber} xs={12} sm={6} md={4}>
          <TrainCard train={train} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TrainList;
