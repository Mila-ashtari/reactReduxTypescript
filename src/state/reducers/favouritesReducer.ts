interface favouritesState {
  data: string[];
}

interface action {
  type: string;
  payload?: any;
}
const favouritesReducer = (state:favouritesState, action:action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...state.data, action.payload];
    default:
      return state;
  }
};
