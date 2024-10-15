export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ATHLETES":
      return {
        ...state,
        athletes: payload,
      };
    case "GET_ATHLETE":
      return {
        ...state,
        athlete: payload,
      };
    case "ADD_ATHLETE":
      return {
        ...state,
        athletes: [...state.athletes, payload],
      };
    case "UPDATE_ATHLETE":
      return {
        ...state,
        athletes: state.athletes.map((athlete) =>
          athlete.id === payload.id
            ? (athlete = payload)
            : athlete
        ),
      };
    case "DELETE_ATHLETE":
      return {
        ...state,
        athletes: state.athletes.filter(
          (athlete) => athlete.id !== payload
        ),
      };
    default:
      return state;
  }
};
