import axios from "axios";
import { PicturesActionType } from "../actionTypes";

export const fetchPictures = () => {
  return async (dispatch: any) => {
    dispatch({
      type: PicturesActionType.FETCH_PICTURES_LOADING,
    })
    try{
        const results =axios.get('https://agencyanalytics-api.vercel.app/images.json')


    }
    catch(error:any){
        dispatch({
            type:PicturesActionType.FETCH_PICTUES_ERROR,
            payload:error.massage
        })
    }
  };
};
