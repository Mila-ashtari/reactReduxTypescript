interface favouritesState {
  data: string[];
}

interface action {
  type: string;
  payload?: any;
}

const intialState:favouritesState={
  data:[]
}
const favouritesReducer = (
  state: favouritesState = intialState,
  action: action
) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...state.data, action.payload];
    default:
      return state;
  }
};

export default favouritesReducer
