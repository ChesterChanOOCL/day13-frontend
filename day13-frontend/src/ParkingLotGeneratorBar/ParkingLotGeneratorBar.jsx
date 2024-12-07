// ParkingLotGeneratorBar.jsx
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import './ParkingLotGeneratorBar.css';
import {fetchCar, parkCar} from "../api/park";
const ParkingLotGeneratorBar = () => {
    const [placeNumber, setPlaceNumber] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handlePark = async () => {
        try {
            const response = await parkCar(placeNumber);
            console.log('Parked:', response);
        } catch (error) {
            console.error('Error parking the car:', error);
        }
    };

    const handleFetch = async () => {
        try {
            const response = await fetchCar(placeNumber);
            console.log('Fetched:', response);
        } catch (error) {
            console.error('Error fetching the car:', error);
        }
    };

    return (
        <div className="ParkingLotGeneratorBar">
        <Box display="flex" alignItems="center" gap={2}>
            <TextField
                label="Place Number"
                value={placeNumber}
                onChange={(e) => setPlaceNumber(e.target.value)}
                variant="outlined"
            />
            <FormControl variant="outlined">
                <InputLabel id="select-label">Option</InputLabel>
                <Select
                    labelId="select-label"
                    sx={{"width": '120px' }}
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    label="Option"
                >
                    <MenuItem value="Standard">Stand</MenuItem>
                    <MenuItem value="Smart">Smart</MenuItem>
                    <MenuItem value="SuperSmart">SuperSmart</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handlePark}>
                Park
            </Button>
            <Button variant="contained" color="secondary" onClick={handleFetch}>
                Fetch
            </Button>
        </Box>
        </div>
    );
};

export default ParkingLotGeneratorBar;