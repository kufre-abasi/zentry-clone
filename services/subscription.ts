import axios from '~/config/api'
import { catchAxiosError, showSuccessToast,catchAxiosSuccess } from './response'


export const createSubscription = async (payload: any) => {
  try {
    let res = await axios.post(`subscription`, payload)
    showSuccessToast(res?.data?.data?.message || 'Thanks for joining our promotions')
    catchAxiosSuccess(res?.data)
    console.log(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
