import {axiosService} from "./axios.service";
import {urls} from "../configs";


const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    getUser: (id) => axiosService.get(urls.users+'/'+id),
    getAllPosts: ()=> axiosService.get(urls.posts)
}

export {userService};