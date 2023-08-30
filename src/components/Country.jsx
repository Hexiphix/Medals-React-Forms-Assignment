import { Badge, Button, Divider, Grid, Paper } from '@mui/material';
import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Medal from './Medal';

class Country extends Component {
    render() {
        const { onIncrement, onDecrement, onDelete, getMedalCount, country } = this.props;
        return (
            // contains each div elements
            <Paper elevation={3} className='paperBounds'>
                {/* div element used to display the country's name */}
                <Grid container alignItems={'center'}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className='countryNameTop'>
                        <Badge className='countryName' color='primary' badgeContent={ getMedalCount(country.id) }>
                            <div className='adjustBadge'>{ country.name }</div>
                        </Badge>
                    </Grid>
                    <Grid item xs={2} sx={{ textAlign: 'right' }}>
                        <Button onClick={ () => onDelete(country.id) }
                                className='incdecButtonClass'
                                variant='outlined'
                                color='warning'>
                            <DeleteIcon fontSize='large'/>
                        </Button>
                    </Grid>
                </Grid>
                

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