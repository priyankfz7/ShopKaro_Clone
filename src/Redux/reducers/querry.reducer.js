import { Querry_Change } from "../actiontypes/querry.actiontypes";

const intData = {
  q: "",
};
export const querryReducer = (state = intData, { type, payload }) => {
  switch (type) {
    case Querry_Change: {
      return { ...state, q: payload };
    }
    default: {
      return state;
    }
  }
};
