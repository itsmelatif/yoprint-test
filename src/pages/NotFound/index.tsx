import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" color="error" gutterBottom>
        {t("notFoundPageTitle")}
      </Typography>
      <Typography variant="body1" mb={4}>
        {t("notFoundPageDescription")}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        {t("goHome")}
      </Button>
    </Box>
  );
};

export default NotFound;
