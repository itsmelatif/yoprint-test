import React from "react";
import {
  Box,
  Select,
  MenuItem,
  IconButton,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useTranslation } from "react-i18next";
interface Props {
  sortBy: string;
  sortOrder: "asc" | "desc";
  view: "grid" | "list";
  onSortByChange: (value: string) => void;
  onSortOrderChange: (value: "asc" | "desc") => void;
  onViewChange: (view: "grid" | "list") => void;
  sortOptions: { label: string; value: string }[];
}

const SortAndViewSwitcher: React.FC<Props> = ({
  sortBy,
  sortOrder,
  view,
  onSortByChange,
  onSortOrderChange,
  onViewChange,
  sortOptions,
}) => {
  const { t } = useTranslation();
  const handleSortByChange = (e: SelectChangeEvent) => {
    onSortByChange(e.target.value);
  };

  const handleSortOrderChange = (e: SelectChangeEvent) => {
    onSortOrderChange(e.target.value as "asc" | "desc");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={() => onViewChange("grid")}
        color={view === "grid" ? "primary" : "default"}
      >
        <ViewModuleIcon />
      </IconButton>
      <IconButton
        onClick={() => onViewChange("list")}
        color={view === "list" ? "primary" : "default"}
      >
        <ViewListIcon />
      </IconButton>
      </Box>
      <FormControl size="small">
        <InputLabel>{t("sortBy")}</InputLabel>
        <Select value={sortBy} onChange={handleSortByChange} label={t("sortBy")}>
          {sortOptions.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel>{t("sortOrder")}</InputLabel>
        <Select
          value={sortOrder}
          onChange={handleSortOrderChange}
          label={t("sortOrder")}
        >
          <MenuItem value="asc">{t("ascending")}</MenuItem>
          <MenuItem value="desc">{t("descending")}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortAndViewSwitcher;
