import axios from "~/config/api";
import { catchAxiosError, showSuccessToast,catchAxiosSuccess } from './response'

export const createContact = async (payload: any) => {
  try {
    let res = await axios.post(`contact`,payload)
    showSuccessToast(res?.data?.data?.message || 'Succesfully sent message')
     catchAxiosSuccess(res?.data) 
    console.log(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
