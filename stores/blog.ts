import { defineStore } from 'pinia'
import * as blogService from "~/services/blog";

export const blogStore = defineStore("blogStore", () => {
  const blogs = ref<any[]>([])
  const blogcategory = ref<any>({})
  const singleBlog = ref<any>(null)

  const getBlog = async () => {
    blogs.value = await blogService.getBlog()
  }
  const getSingleBlog = async (id:any) => {
    try {
    singleBlog.value = await blogService.getSingleBlog(id)
      return singleBlog.value
    } catch (error) {
      throw error
    }
  }
  const getBlogCategory = async () => {
    blogcategory.value = await blogService.getBlogCategory()
  }
  // 

  return {
    blogs,
    blogcategory,
    getBlog,
    getBlogCategory,
    getSingleBlog,
    singleBlog
  }
});
