import {axiosInstance} from "./axios.service";
import {urls} from "../configs";


const userService = {
    getAllUsers: function (){
        return axiosInstance.get(urls.findUsers)
    }
};

export {userService};