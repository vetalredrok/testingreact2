import axios from "axios";
import {baseUrl} from "../configs/urls";


const axiosInstance = axios.create({baseURL:baseUrl});

export {axiosInstance};