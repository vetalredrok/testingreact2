import {axiosInstance} from "./axios.service";
import {urls} from "../config";


const userService = {
    getAll: () => axiosInstance.get(urls.users),
    getPosts: (id) => axiosInstance.get(urls.users + '/' + id + urls.posts)
}

export {userService};