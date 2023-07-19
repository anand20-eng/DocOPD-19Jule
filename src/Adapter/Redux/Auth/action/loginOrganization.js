
import axios from "axios";

const url = 'http://192.168.1.2:8080/docopd_backend';

export const addOrganization = (organization) => {
  console.log(' loginOrganization  Addorganization l =>', organization)
  return axios.post('http://192.168.1.2:8081/docopd_backend/organisation_api/Add',  organization );
};

export const getAllOrganization = () => {
  console.log(' loginOrganization  getAllOrganization =>')
  return axios.get('http://192.168.1.2:8081/docopd_backend/organisation_api/AllOrganisation');
};

export const getOrganizationById = (id) => {
  console.log(' loginOrganization  getOrganizationById =>', id)
  return axios.get(`http://192.168.1.2:8081/docopd_backend/organisation_api/getOrganisationByorganisation_id/${id}`);
};

export const updateOrganization = (updateOrganization) => {
  return axios.put('http://192.168.1.2:8081/docopd_backend/organisation_api/updateOrganisationDetails', updateOrganization);
};

export const deleteOrganization = (id, status) => {
  console.log(' loginOrganization  getOrganizationById =>', id, status)
  return axios.get(`http://192.168.1.2:8081/docopd_backend/organisation_api/deleteOrganisation?orgnisation_id=${id}&status=${status}`,);
};



 