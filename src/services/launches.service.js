import {axiosInstance} from "./axios.service";


const launchesService = {
    getAllLaunches: function () {
        return axiosInstance.get();
    }

};

export {launchesService};