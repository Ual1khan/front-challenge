import axios from "axios";
import { IJob } from "../types/Job";

export const getAllJobs = () => {
  return axios.get<IJob[]>("https://mocki.io/v1/3c25f51f-4b22-4752-8c5b-64eae72917ea");
};
