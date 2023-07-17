import { PicturesActionType } from "../actionTypes";

interface picturesState {
  loading: boolean;
  error: boolean | null;
  data: string[];
}
interface action {
  type: string;
  payload?: any;
}

const initialState :picturesState = {
  loading: false,
  error: null,
  data: [],
};
const picturesReducer = (
  state: picturesState = initialState,
  action: action
): picturesState => {
  switch (action.type) {
    case PicturesActionType.FETCH_PICTURES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case PicturesActionType.FETCH_PICTURES_LOADING:
      return { loading: true, error: null, data: [] };
    case PicturesActionType.FETCH_PICTUES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case PicturesActionType.DELETE_PICTURE:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default picturesReducer;
