
import {SIGNUP_SUCCESS} from "../Auth/constant";
import { INITIAL_STATE } from "../Auth/state";

export const signUpReducer = (signUp = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return { ...signUp.userInfo, signUp: { email: action.email } }

        default:
            return signUp;
    }
}
