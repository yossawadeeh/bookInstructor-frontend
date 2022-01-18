import { useCallback, useState } from "react";
import bookInstructorApi from "../api/bookInstructorAPI";
import AddInstructorModel from "../models/AddInstructorModel";
import AvailableInstructor from "../models/AvailableInstructor";
import Instructor from "../models/Instructor";

const useBookInstructor = () => {
  const [instructor, setInstructor] = useState<Instructor[]>([]);
  const [avaTime, setAvaTime] = useState<AvailableInstructor>();

  const get_instructor = useCallback(async () => {
    const rlt = await bookInstructorApi.getInstructor();
    setInstructor(rlt.data);
  }, [setInstructor]);

  const get_avaTimeInstructor = useCallback(
    async (code: string, date: any) => {
      const rlt = await bookInstructorApi.getAvaTimeInstructor(code, date);
      setAvaTime(rlt.data);
    },
    [setAvaTime]
  );

  const post_instructor = useCallback(
    async (addIn: AddInstructorModel) => {
      const rlt = await bookInstructorApi.postInstructor(addIn);
    },
    [setAvaTime]
  );

  return [instructor, get_instructor, avaTime, get_avaTimeInstructor, post_instructor] as const;
};
export default useBookInstructor;
