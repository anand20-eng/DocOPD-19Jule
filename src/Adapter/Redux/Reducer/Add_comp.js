import {  COMPOUNDER_PROFILE_ACTION, DOCTOR_PROFILE_ACTION } from "../Auth/constant";
import { COMPOUNDER_PROFILE, DOCTOR_PROFILE} from "../Auth/state";

export const Add_comp = (compounder_profile = COMPOUNDER_PROFILE, action) => {
    switch (action.type) {
        case COMPOUNDER_PROFILE_ACTION:
             compounder_profile = action.profile
             return compounder_profile

        default:
            return compounder_profile;

    }
}

export const Add_Doc = (doctor_profile = DOCTOR_PROFILE, action) => {
    switch (action.type) {
        case DOCTOR_PROFILE_ACTION:
            doctor_profile = action.addDoctor
            return doctor_profile

        default:
            return doctor_profile;

    }
}
