import { PASS_PATIENT, DELETE_PASS_PATIENT } from "../Auth/constant";
import { PATIENT_PASS } from "../Auth/state";

export const currentPatient = (passPatientState = PATIENT_PASS, action) => {
  switch (action.type) {
    case PASS_PATIENT:
      passPatientState = action.passPatient
      return  passPatientState
    case DELETE_PASS_PATIENT:
      passPatientState = delete passPatientState.passPatient
      return  passPatientState

    default:
      return passPatientState;

  }
}
