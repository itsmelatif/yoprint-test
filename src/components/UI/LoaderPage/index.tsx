import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoaderPage: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <CircularProgress color="primary" />
      <Typography variant="body1" color="textSecondary">
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default LoaderPage;
