import { Document } from "mongoose"

export interface ITask {
  name: string
  description: string
  status?: "todo"|"done";
}