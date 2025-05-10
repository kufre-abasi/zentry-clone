import axios from "axios";
import { catchAxiosError, showErrorToast } from '@/services/response'


axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASEURL;

axios.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error:any) => {
   if (!error.response) {
     // Handle network error (e.g., no internet connection)
      showErrorToast('Network error: Please check your internet connection.')

   } else if (error.response.status === 401) {
     // Handle unauthorized error
      catchAxiosError(error.response.data.message)
   } 
   return Promise.reject(error);
    }
);

export default axios;
