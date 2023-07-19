
import { ADD_PATIENT, DELETE_PATIENT } from "../Auth/constant";
import { INITIAL_STATE } from "../Auth/state";

export const paRe = (patientState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PATIENT:
       action.patient.id = patientState.patientUs.length > 0 ? patientState.patientUs[patientState.patientUs.length - 1].id + 1 : 1
      return {
        patientUs: [...patientState.patientUs, action.patient],
      }
    case DELETE_PATIENT:
       patientState.patientUs = patientState.patientUs.filter((item) => item.id !== action.id);
       return {...patientState};
    default:
      return patientState;

  }
}
