import { Querry_Change } from "../actiontypes/querry.actiontypes";

export const changeQuerry = (querry) => {
  return { type: Querry_Change, payload: querry };
};
