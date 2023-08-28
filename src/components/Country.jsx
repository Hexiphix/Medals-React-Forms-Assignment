import { Badge, Divider, Paper } from '@mui/material';
import React, { Component } from 'react';
import Medal from './Medal';

class Country extends Component {
    render() {
        const { onIncrement, onDecrement, getMedalCount, country } = this.props;
        return (
            // contains each div elements
            <Paper elevation={3} className='paperBounds'>
                {/* div element used to display the country's name */}
                <div className='countryNameTop'>
                    <Badge className='countryName' color='primary' badgeContent={ getMedalCount(country.id) }>
                        <div className='adjustLeft'>{ country.name }</div>
                    </Badge>
                </div>

                <Divider className='dividerScale'/>

                { country.medals.map(medal => 
                    <Medal
                        key={ medal.medalName }
                        medal={ medal }
                        countryId={ country.id }
                        onIncrement={ onIncrement }
                        onDecrement={ onDecrement } />
                )}
            </Paper>
        );
    }
    
}

export default Country