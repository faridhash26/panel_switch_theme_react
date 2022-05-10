import { CHANGE_COLOR_THEME } from "../constants";

const inintState = {
  bgColor: false,
};
export const themeReducer = (state = inintState, action) => {
  switch (action.type) {
    case CHANGE_COLOR_THEME:
      return {
        ...state,
        bgColor: !state.bgColor,
      };

    default:
      return state;
  }
};
