import { DEC_COUNT, INC_COUNT } from "./userType";

const initialState = {
  numOfCount: 2,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNT:
      return {
        ...state,
        numOfCount: state.numOfCount + 1,
      };
    case DEC_COUNT:
      return {
        ...state,
        numOfCount: state.numOfCount - 1,
      };

    default:
      return state;
  }
};
