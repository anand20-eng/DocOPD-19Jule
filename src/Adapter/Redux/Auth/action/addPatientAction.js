
import axios from "axios"
import { ADD_PATIENT, DELETE_PATIENT } from "../constant"

export const addPatientSuccess = (patient) => ({ type: ADD_PATIENT, patient })
export const deletePatient = (id) => ({ type: DELETE_PATIENT, id })



export const addPatient = (addPatient) => {
    return axios.post('http://192.168.1.102:8081/docopd_backend/patient_api/Add', addPatient);
}

export const getAllPatient = () => {
    return axios.get('http://192.168.102:8081/docopd_backend/patient_api/All');
}

export const getPatientById = (id) => {
    return axios.get(`http://192.168.102:8081/docopd_backend/patient_api/patient/${id}`);
}

export const getPatientByContact = (contactNo) => {
    return axios.get(`http://192.168.102:8081/docopd_backend/patient_api/PatientModel/${contactNo}`);
}
export const updatePatient = (updatePatient) => {
    return axios.put('http://192.168.102:8081/docopd_backend/patient_api/updatePatientDetails',updatePatient );
}

export const deletePatientById = (id,status) => {
    return axios.get(`http://192.168.102:8081/docopd_backend/patient_api/deletePatient?id=${id}&status=${status}`);
}





