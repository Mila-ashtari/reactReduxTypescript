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
    case "DELETE_FAVOURITE":
      return state.data.filter((user: any) => {
        return user.id !== action.payload;
      });
    default:
      return state;
  }
};
