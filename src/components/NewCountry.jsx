import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { Component } from 'react';

class NewCountry extends Component {
    state = {
        countryName: '',
    }
    toggleForm = () => {
        const { toggleNewCountryForm, showForm } = this.props;
        toggleNewCountryForm();
        if (showForm) {
            this.setState({ countryName: '' });
        }
    }
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value});
    saveCountry = () => {
        const { countryName } = this.state;
        this.props.onAdd(countryName);
        this.toggleForm();
    } 
    render() {
        const { countryName } = this.state;
        const { showForm } = this.props;
        return(
            <Dialog open={showForm} onClose={this.toggleForm}>
                <DialogTitle>Add Country</DialogTitle>
                <DialogContent>
                    <DialogContentText>To add a new country, enter the name</DialogContentText>
                    <TextField
                        type="text"
                        id="newCountryName"
                        name="countryName"
                        value={ countryName }
                        onChange={ this.handleChange }
                        autoFocus
                        autoComplete="off"
                        margin="dense"
                        label="Country Name"
                        fullWidth
                        variant='standard' />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.toggleForm} color='error'>Cancel</Button>
                    <Button 
                        onClick={this.saveCountry} 
                        disabled={ countryName.trim().length === 0 }>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default NewCountry;