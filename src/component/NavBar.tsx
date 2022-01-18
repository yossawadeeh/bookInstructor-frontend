import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const NavBar = () => {
  const appointment = () => {
    console.log("APPOINMENT");
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div">
              Book Instructor
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Your appointment">
              <IconButton sx={{ p: 0 }}>
                <CalendarTodayIcon
                  style={{ color: "white" }}
                  onClick={appointment}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
