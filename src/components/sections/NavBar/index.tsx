import React from "react";
import { AppBar, Toolbar, Typography, FormControl, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material/Select";

const NavBar: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ width: "100%", m: 0, p: 0 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        <FormControl size="small" sx={{ ml: 2, color: "#fff" }}>
          <Select
            value={i18n.language}
            onChange={handleLanguageChange}
            variant="outlined"
            sx={{
              color: "#fff",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
              ".MuiSvgIcon-root": { color: "#fff" },
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="my">Malay</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
