import { toast } from "react-toastify";
toast.configure();

export const notify = (
    type: "success" | "error" | "info" | "warn",
    message: string
) => {
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
