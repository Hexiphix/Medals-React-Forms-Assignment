import { Avatar, Button } from '@mui/material';
import { Component } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

class Medal extends Component{
    renderDisabled(medal){
        return (medal <= 0 ? true : false);
    }

    render() {
        const { onIncrement, onDecrement, medal, countryId } = this.props;
        return (
            // div element used to display the medal count
            <div className='medalCountDiv'>
                <Avatar className={ medal.medalName + 'CountDiv countDiv'}>{ medal.count }</Avatar>
                <span className='medalText'>{medal.medalName.charAt(0).toUpperCase() + medal.medalName.slice(1)} Medals</span>

                {/* button element used to increment the gold medal count */}
                <Button onClick={ () => onIncrement(countryId, medal.medalName) }
                        className='incdecButtonClass' 
                        variant='outlined'>
                    <AddRoundedIcon fontSize='large'/>
                </Button>

                {/* button element used to decrement the gold medal count */}
                <Button onClick={ () => onDecrement(countryId, medal.medalName) }
                        className='incdecButtonClass' 
                        variant='outlined'
                        color='error'
                        disabled={this.renderDisabled(medal.count)}>
                    <RemoveRoundedIcon fontSize='large'/>
                </Button>
            </div>
        );
    }
}

export default Medal