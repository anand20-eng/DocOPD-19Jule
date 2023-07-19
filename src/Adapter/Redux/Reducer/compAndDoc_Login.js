
import { DOC_LOGIN, COMP_LOGIN, COMP_LOG_OUT, DOC_LOG_OUT } from "../Auth/constant";
import { DOC_AND_COMP_LOGIN } from "../Auth/state";

export const compAndDoc = (stateCD = DOC_AND_COMP_LOGIN, action) => {
  switch (action.type) {

    case DOC_LOGIN:
      stateCD = action.user
      return { ...stateCD }

    case DOC_LOG_OUT:
      if (stateCD.role == action.role) {
        stateCD.role = ''
        return { ...stateCD }
      }

    case COMP_LOGIN:
      stateCD = action.user

      return { ...stateCD }

    case COMP_LOG_OUT:
      if (stateCD.role == action.role) {
          stateCD.role = ''
        return { ...stateCD }
      }

    default:
      return stateCD;

  }
}


