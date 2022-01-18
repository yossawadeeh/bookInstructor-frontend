import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import AvailableInstructor from "../models/AvailableInstructor";
import Instructor from "../models/Instructor";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import AddInstructorModel from "../models/AddInstructorModel";
import { setDate } from "date-fns/esm";

interface ITimeDetail {
  instructor: Instructor[];
  date: any;
  code: string | undefined;
  open: any;
  handleClose: any;
  avaTime: AvailableInstructor | undefined;
  get_avaTimeInstructor: any;
  post_instructor: any;
  setCode: any;
  setDate: any;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TimeDetail = ({
  instructor,
  date,
  code,
  open,
  handleClose,
  avaTime,
  get_avaTimeInstructor,
  post_instructor,
  setCode,
  setDate,
}: ITimeDetail) => {
  const [start, setStart] = React.useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStart(Number((event.target as HTMLInputElement).value));
  };

  useEffect(() => {
    get_avaTimeInstructor(code, moment(date).format("YYYY-MM-DD"));
  }, [get_avaTimeInstructor]);

  const submit = () => {
    const d = moment(date).format("YYYY-MM-DD");
    const s = start;
    const e = start + 1;

    if (code !== undefined) {
      let addIn: AddInstructorModel = {
        id: 0,
        instrutorCode: code,
        createDate: d,
        timeStart: s,
        timeEnd: e,
      };

      post_instructor(addIn);
      // setCode(undefined);
      setDate(null);
      handleClose(true);
    }
  };

  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {code}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {moment(date).format("YYYY-MM-DD")}
          </Typography>

          <Grid container justifyContent="center" marginTop={"2%"}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Select Time
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleChange}
              >
                {avaTime?.timeSlot.map((a, key) => {
                  return (
                    <FormControlLabel
                      value={a.start}
                      control={<Radio />}
                      label={a.start + ".00 - " + a.end + ".00"}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid container justifyContent="center" marginTop={"2%"}>
            <Button variant="contained" onClick={submit}>
              SUBMIT
            </Button>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};
export default TimeDetail;
