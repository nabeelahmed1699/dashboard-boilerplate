import { fetchWrapper, fetchWrapperUpload } from '../Utils/fetchWrapper';
import urls from '../constants/configs/routApis';

export const GET_FEES_API = () => fetchWrapper('GET', urls.FEES);

export const POST_FEES_API = (body) => fetchWrapper('POST', urls.FEES, body);

export const DELETE_FEES_API = (body) => fetchWrapper('DELETE', urls.FEES, body);

// Posts

export const GET_SOCIALPOSTS_API = () => fetchWrapper('GET', urls.SOCIAL_POSTS);

export const POST_SOCIALPOSTS_API = (body) => fetchWrapper('POST', urls.SOCIAL_POSTS, body);

export const DELETE_SOCIALPOSTS_API = (body) => fetchWrapper('DELETE', urls.SOCIAL_POSTS, body);
