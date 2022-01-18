import {
  Autocomplete,
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import useBookInstructor from "../hook/useBookInstructor";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import moment from "moment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import React from "react";
import TimeDetail from "./TimeDetail";

const BookInstructor = () => {
  const [instructor, get_instructor, avaTime, get_avaTimeInstructor, post_instructor] =
    useBookInstructor();

  const [code, setCode] = useState<string | undefined>("");
  const [date, setDate] = useState<Date | null>(null);

  console.log("code: ", code);
  console.log("date: ", moment(date).format("YYYY-MM-DD"));

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    get_instructor();
  }, [get_instructor]);

  const handleOpen = () => {
    setOpen(true);

    if (code !== undefined) {
      get_avaTimeInstructor(code, moment(date).format("YYYY-MM-DD"));
      // console.log("xx: ", avaTime?.instructorCode)
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <Grid>
      <h1 id="transition-modal-title">Appointment</h1>

      <Grid container justifyContent="center" marginTop={"5%"}>
        <Autocomplete
          // disablePortal
          id="combo-box-demo"
          options={instructor}
          getOptionLabel={(option) => option.fullName}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Instructor" required value={code} />
          )}
          onChange={(e, val) => {
            setCode(val?.instructorCode);
          }}
        />
      </Grid>
      <Grid container justifyContent="center" marginTop={"2%"}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Select Date"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid container justifyContent="center" marginTop={"2%"}>
        <Button
          variant="contained"
          endIcon={<CalendarTodayIcon />}
          onClick={handleOpen}
        >
          BOOK
        </Button>
      </Grid>

      <Grid>
        {open && <TimeDetail
          instructor={instructor}
          date={date}
          code={code}
          open={open}
          handleClose={handleClose}
          avaTime={avaTime}
          get_avaTimeInstructor={get_avaTimeInstructor}
          post_instructor={post_instructor}
          setCode={setCode}
          setDate={setDate}
        />}
        
      </Grid>
    </Grid>
  );
};
export default BookInstructor;
