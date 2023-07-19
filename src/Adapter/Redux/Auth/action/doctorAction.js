import axios from 'axios';
import { DOC_LOGIN,DOCTOR_PROFILE_ACTION, DOC_LOG_OUT } from "../constant"

export const doctorLoginAction = (user) => ({ type: DOC_LOGIN, user })
export const doctorLogout = (role) => ({ type: DOC_LOG_OUT, role })
export const doctorProfileAction = (addDoctor) => ({ type: DOCTOR_PROFILE_ACTION, addDoctor })


export const doctorLogin = (contact, password) => {
    console.log('userName and Password =>', contact, password);
    return axios.get(`http://192.168.1.101:8081/docopd_backend/doctor_api/login?contact=${contact}&password=${password}`);
}
export const addDoctor = (addDoctor) => {
    return axios.post('http://192.168.1.102:8081/docopd_backend/doctor_api/Add', addDoctor);
}

export const getAllDoctor = () => {
    return axios.get('http://192.168.1.102:8081/docopd_backend/doctor_api/All');
}

export const getByIdDoctor = (id) => {
    return axios.get(`http://192.168.1.102:8081/docopd_backend/doctor_api/doctor/${id}`);
}

export const getDoctorByContact = (contact) => {
    return axios.get(`http://192.168.1.102:8081/docopd_backend/doctor_api/DoctorModel/${contact}`);
}
export const updateDoctor = (updateDoctor) => {
    return axios.put('http://192.168.1.102:8081/docopd_backend/doctor_api/updateDoctorDetails', updateDoctor);
}

export const deleteDoctor = (id,status) => {
    return axios.get(`http://192.168.1.102:8081/docopd_backend/doctor_api/deleteDoctor?id=${id}&status=${status}`);
}

