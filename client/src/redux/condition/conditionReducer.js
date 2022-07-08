const initialState = {
  footershow: true,
};

const ConditionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDITPROFILE":
      return {
          ...state,
        footershow: false,
      };
    case "SIGNUP":
      return {
        ...state,
        footershow: false,
      };
    case "SIGNIN":
      return {
        ...state,
        footershow: false,
      };
    case "RANKING":
      return {
        ...state,
        footershow: false,
      };
    case "ACTIVITY":
      return {
        ...state,
        footershow: false,
      };

    default:
      return state;
  }
};
export default ConditionReducer;
