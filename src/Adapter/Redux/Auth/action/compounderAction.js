
import axios from 'axios';
import { COMP_LOGIN, COMP_LOG_OUT, COMPOUNDER_PROFILE_ACTION} from "../constant"

export const compLoginAction = (user) => ({ type: COMP_LOGIN, user })
export const compounderLogout = (role) => ({ type: COMP_LOG_OUT, role })
export const comp_profile_action = (profile)=> ({type: COMPOUNDER_PROFILE_ACTION, profile})

export const compounderLogin = (contact, password) => {
    return axios.get(`http://192.168.1.102:8081/docopd_backend/compounder_api/login?contact=${contact}&password=${password}`);
}


export const getAllCompounder = () => {
    return axios.get('http://192.168.1.102:8081/docopd_backend/compounder_api/All');
}

export const addCompounder = (compounder) => {
    return axios.post('http://192.168.1.102:8081/docopd_backend/compounder_api/Add', compounder);
}

export const getCompounderById = (id) => {
    return axios.get(`http://192.168.1.102:8081/docopd_backend//compounder_api/compounder/${id}`);
}

export const updateCompounder = (updateCompounder) => {
    return axios.put('http://192.168.1.102:8081/docopd_backend/compounder_api/updateCompounderDetails',updateCompounder );
}

export const deleteCompounder = (id,status) => {
    return axios.get(`http://192.168.1.102:8081/docopd_backend/compounder_api/deleteCompounder?id=${id}&status=${status}`);
}






