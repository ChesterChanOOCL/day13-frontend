// ParkingLotHome.jsx
import React from 'react';
import ParkingLotGeneratorBar from './ParkingLotGeneratorBar/ParkingLotGeneratorBar';
import ParkingLotGroup from './ParkingLotGroup/ParkingLotGroup';

const ParkingLotHome = () => {
    return (
        <div>
            <h1>Parking Lot Home</h1>
            <ParkingLotGeneratorBar />
            <ParkingLotGroup />
        </div>
    );
};

export default ParkingLotHome;