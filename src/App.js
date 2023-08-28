import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import { Badge, Container, Grid } from '@mui/material';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', medals: [
        {medalName: 'gold', count: 2}, 
        {medalName: 'silver', count: 2}, 
        {medalName: 'bronze', count: 3}]},

      { id: 2, name: 'China', medals: [
        {medalName: 'gold', count: 3}, 
        {medalName: 'silver', count: 1}, 
        {medalName: 'bronze', count: 0}]},

      { id: 3, name: 'Germany', medals: [
        {medalName: 'gold', count: 0}, 
        {medalName: 'silver', count: 2}, 
        {medalName: 'bronze', count: 2}]},
    ]
  }

  incrementMedal = (countryId, medalName) => {
    // use spread operator to clone array
    const countriesMutable = [...this.state.countries];
    // use array.findIndex to return the index of the array element with matching id
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    // use array.findIndex again to return the index of the array element with matching medalName
    const medalIdx = countriesMutable[idx].medals.findIndex((m) => m.medalName === medalName);
    // increase medal attribute using the returned indexes
    countriesMutable[idx].medals[medalIdx].count += 1;

    // sets the state of countries
    this.setState({ countries:countriesMutable });
  }

  decrementMedal = (countryId, medalName) => {
    // use spread operator to clone array
    const countriesMutable = [...this.state.countries];
    // use array.findIndex to return the index of the array element with matching id
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    // use array.findIndex again to return the index of the array element with matching medalName
    const medalIdx = countriesMutable[idx].medals.findIndex((m) => m.medalName === medalName);
    // checks to ensure that medal attribute can be decreased
    if(countriesMutable[idx].medals[medalIdx].count >= 1)
    {
      // decreases medal attribute using the returned indexes
      countriesMutable[idx].medals[medalIdx].count -= 1;
    }
    
    // sets the state of countries
    this.setState({ countries:countriesMutable });
  }
  
  getCountryMedalCount = (countryId) => {
    // use spread operator to clone array
    const countriesMutable = [...this.state.countries];
    // use array.findIndex to return the index of the array element with matching id
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    // gets the medal count for the specific country
    return countriesMutable[idx].medals.reduce((a, b) => a + b.count, 0);
  }

  getTotalMedalCount = () => {
    // use spread operator to clone array
    const countriesMutable = [...this.state.countries];
    // gets the total medal count for all the countries
    return countriesMutable.reduce((a, b) => a + b.medals.reduce((a, b) => a + b.count, 0), 0);
  }

  render() { 
    return ( 
      <div className="App">
        <div className='topBanner'>
          <Badge className='topBannerText' color='primary' badgeContent={ this.getTotalMedalCount() }>
            <div className='adjustLeft'>Olympic Medals</div>
          </Badge>
        </div>
        <Container fixed maxWidth="lg" sx={{paddingTop: 8.75, paddingBottom: 2.5}}>
          <Grid container spacing={2} justifyContent="center">
            { this.state.countries.map(country => 
              <Grid item key={country.id}>
                  <Country 
                    key={ country.id } 
                    country={ country }
                    getMedalCount={ this.getCountryMedalCount }
                    onIncrement={ this.incrementMedal }
                    onDecrement={ this.decrementMedal } />
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
     );
  }
}

export default App;
