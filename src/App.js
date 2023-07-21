import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Container, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Train Central</Typography>
          <Tabs>
            <Tab label="All Trains" component={Link} to="/" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route exact path="/" component={AllTrainsPage} />
          <Route path="/trains/:trainNumber" component={SingleTrainPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
