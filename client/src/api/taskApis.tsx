import axios, { AxiosResponse } from "axios";
import { ITasks } from "../types/task";

const nodeApi = process.env.NODE_API;

export const getTaskListApi = async ():Promise<AxiosResponse<ITasks[]>> => axios.get(`${nodeApi}/tasks`)
export const addNewTaskApi = async (task:ITasks):Promise<AxiosResponse<{}>> => axios.post(`${nodeApi}/tasks`,task);
export const deleteTaskApi = async (taskId:string|undefined):Promise<AxiosResponse<{}>> => axios.delete(`${nodeApi}/tasks/${taskId}`);
export const updateTaskApi = async (taskId:string|undefined,task:ITasks):Promise<AxiosResponse<{}>> =>  axios.put(`${nodeApi}/tasks/${taskId}`, task);