import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
const toast = useToast();

export const showErrorToast = (message: string) => {
  return toast.error(message, {
    timeout: 4000
  })
}
export const showSuccessToast = (message: string) => {
  return toast.success(message, {
    timeout: 4000
  })
}

export const catchAxiosError = (error: any) => {
    if (error.response && error.response.status === 401) {
        return;
    }

    if (error.response.data.message) {
        return toast.error(error.response.data.message, {
            timeout: 4000,
        });
    }

    if (error.response?.data?.errors) {
        for (let key in error.response.data.errors) {
            return toast.error(error.response.data.errors[key][0], {
                timeout: 4000,
            });
        }
    }
};

export const catchAxiosSuccess = (res: any) => {
    if (res?.data?.message) {
        toast.success(res.data.message, {
            timeout: 4000,
        });
    }
};
