import React, {useState,useEffect} from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Grid } from '@mui/material';
import './ParkingLotGroup.css'; // Import the CSS file

import { fetchParkingLots } from '../api/park';



const parkingLots = [
    {
        name: "The Plaza Park",
        spaces: [
            ["EV-1234", "EV-5678", "EV-91011"],
            ["EV-1213", "", "EV-1617"],
            ["EV-1819", "EV-2021", ""]
        ]
    },
    {
        name: "City Mall Garage",
        spaces: [
            ["EV-2425", "", "EV-2829"],
            ["EV-3031", "EV-3233", ""],
            ["EV-3637", "", "EV-4041"]
        ]
    },
    {
        name: "Office Tower Parking",
        spaces: [
            ["", "EV-4445", "EV-4647"],
            ["EV-4849", "", "EV-5253"],
            ["EV-5455", "EV-5657", ""]
        ]
    }
];

const ParkingLotGroup = () => {
    const [parkingLots, setParkingLots] = useState([]);
    const displayAllParkingLots = async () => {
        try {
            const data = await fetchParkingLots();
            setParkingLots(data);
        } catch (error) {
            console.error("Error fetching parking lots:", error);
        }
    };
    useEffect(() => {
        displayAllParkingLots();

    }, []);
    const createGrid = (capacity) => {
        const rows = [];
        const columns = capacity === 9 ? 3 : 4;
        for (let i = 0; i < capacity; i += columns) {
            rows.push(Array.from({ length: columns }, (_, j) => i + j < capacity ? i + j : null));
        }
        return rows;
    };
    return (
        <div>
            <h1>Parking Lot Group</h1>
            <Grid container spacing={4}>
                {parkingLots.map((lot, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <TableContainer component={Paper} className="table-container">
                            <Table>
                                <TableBody>
                                    {createGrid(lot.capacity).map((row, rowIndex) => (
                                        <TableRow key={rowIndex}>
                                            {row.map((cellIndex, cellIdx) => (
                                                <TableCell key={cellIdx} align="center">
                                                    <Box className="cell-box">
                                                        {cellIndex !== null && lot.tickets[cellIndex] ? lot.tickets[cellIndex].plateNumber : ""}
                                                    </Box>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography variant="h6" align="center" mt={2}>
                            {lot.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ParkingLotGroup;