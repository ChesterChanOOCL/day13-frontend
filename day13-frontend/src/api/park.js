import axios from 'axios';
const instance = axios.create({
    baseURL : "http://localhost:8080/api/parking"
});



export const fetchParkingLots = async () =>{
    const response = await instance.get("/parking-lots");
    return response.data;
}


export const parkCar = async (plateNumber) => {
    const response = await instance.post("/park", { plateNumber });
    return response.data;
};

export const fetchCar = async (ticket) => {
    const response = await instance.get(`/fetch/${ticket}`);
    return response.data;
};


