import { PASS_PATIENT, DELETE_PASS_PATIENT } from "../constant"

export const passPatientAction = (passPatient) => ({ type: PASS_PATIENT, passPatient })

export const deletePassPatientAction = () => ({ type: DELETE_PASS_PATIENT})
