import { types } from './types';
import * as Services from 'src/services';

export const GET_FEES_API_HANDLER = (body) => async (dispatch) => {
	try {
    let Data = await Services.POST_FEES_API(body);
    console.log("DATA",Data)
		return Data;
	} catch (error) {
		return error;
	}
};



export const GET_SOCIALPOSTS_API_HANDLER = (body) => async (dispatch) => {

  try {
    let Data = await Services.GET_SOCIALPOSTS_API()
    dispatch({type:types.SOCIALPOSTS.FETCH_SUCCESS,payload:Data})
    return Data;
  } catch (error) {
    return error
  }
}