import axios from "axios";
import AvailableInstructor from "../models/AvailableInstructor";
import Instructor from "../models/Instructor";
import AddInstructorModel from "../models/AddInstructorModel";

const API_URL = process.env.REACT_APP_API_URL;

const bookInstructorApi = {
  getInstructor: () => {
    return axios.get<Instructor[]>(`${API_URL}api/BookInstructor`);
  },

  getAvaTimeInstructor: (code: string, date: any) => {
    return axios.get<AvailableInstructor>(
      API_URL + "api/BookInstructor/" + code + "/" + date
    );
  },

  postInstructor: (addIn: AddInstructorModel) => {
    return axios.post<AddInstructorModel>(`${API_URL}api/BookInstructor`, addIn);
  },
};
export default bookInstructorApi;
