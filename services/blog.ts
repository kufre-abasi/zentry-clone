import axios from "~/config/api";
import { catchAxiosError } from "./response";

export const getBlog = async () => {
    try {
        let res = await axios.get(`blog`)
        return res;
    } catch (error) {
        catchAxiosError(error);
        throw error;
    }
};
export const getSingleBlog = async (id:any) => {
  try {
    let res = await axios.get(`blog/${id}`)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

export const getBlogCategory = async () => {
  try {
    let res = await axios.get(`blog-category`)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}