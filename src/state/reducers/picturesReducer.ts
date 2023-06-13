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
const picturesReducer = (state: picturesState, action: action): picturesState => {
  switch (action.type) {
    case PicturesActionType.FETCH_PICTURES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case PicturesActionType.FETCH_PICTURES_LOADING:
      return { loading: true, error: null, data: [] };
    case PicturesActionType.FETCH_PICTUES_ERROR:
      return { loading: false, error: null, data: [] };

    default:
      return state;
  }
};
