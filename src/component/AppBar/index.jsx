import {
  Badge,
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ModeSelect from "../ModeSelect";
import MenuIcon from "@mui/icons-material/Menu";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloIcon } from "@/assets/trello.svg";
import WorkSpace from "./Menu/WorkSpace";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import MailIcon from "@mui/icons-material/Mail";
import Profile from "./Menu/Profile";

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.navBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        backgroundColor: "white",
        overflowX: "auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
        <MenuIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <WorkSpace />
          <Recent />
          <Starred />
          <Templates />
          <Button>Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box>
          <TextField
            id="outlined-search"
            label="Search..."
            type="search"
            size="small"
            sx={{ minWidth: "120px" }}
          />
        </Box>
        <Box>
          <ModeSelect />
        </Box>
        <Box>
          <Tooltip title="Notification">
            <IconButton>
              <Badge variant="dot" color="primary">
                <MailIcon sx={{ color: "primary.main" }} />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Profile />
        </Box>
      </Box>
    </Box>
  );
}

export default AppBar;
