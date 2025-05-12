import React from "react";
import {
  Box,
  Pagination,
  Stack,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { PER_PAGE_OPTIONS } from "@/constant/global";

export interface IPaginationComponentProps {
  total: number;
  page: number;
  perPage: number;
  onChangePage: (page: number) => void;
  onChangePerPage: (perPage: number) => void;
  perPageOptions?: number[];
  label?: string;
  labelPerPage?: string;
}

const Paginator: React.FC<IPaginationComponentProps> = ({
  total,
  page,
  perPage,
  onChangePage,
  onChangePerPage,
  perPageOptions = PER_PAGE_OPTIONS,
  label,
  labelPerPage = "Per Page",
}) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      {label && (
        <Typography variant="body2" sx={{ color: "#1f1f1f" }}>
          {label}
        </Typography>
      )}

      <Stack direction="row" spacing={2} alignItems="center" sx={{ color: "#1f1f1f", borderColor: "#1f1f1f" }}>
        <FormControl size="small" sx={{ color: "#1f1f1f", borderColor: "#1f1f1f" }}>
          <InputLabel id="per-page-select-label" sx={{ color: "#1f1f1f" }}>{labelPerPage}</InputLabel>
          <Select
            labelId="per-page-select-label"
            value={perPage}
            label={labelPerPage}
            onChange={(e) => onChangePerPage(Number(e.target.value))}
            sx={{ color: "#1f1f1f", borderColor: "#1f1f1f" }}
          >
            {perPageOptions.map((num) => (
              <MenuItem key={num} value={num} sx={{ color: "#1f1f1f" }}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => onChangePage(value)}
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default Paginator;
