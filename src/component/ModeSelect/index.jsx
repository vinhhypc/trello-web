import { useColorScheme } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LightMode from "@mui/icons-material/LightMode";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Theme</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <LightMode fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <DarkModeOutlined fontSize="small" /> Dark
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
export default ModeSelect;
