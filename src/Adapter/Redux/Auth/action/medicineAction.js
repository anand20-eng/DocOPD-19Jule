import axios from 'axios';

export const addMedicinePatient = (addMedicine) => {
    return axios.post('http://192.168.1.102:8081/docopd_backend/medicine_api/Add', addMedicine);
}