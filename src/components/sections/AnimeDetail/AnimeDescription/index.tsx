import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";

interface AnimeInfoProps {
  title?: string;
  titleJapanese?: string;
  synopsis?: string;
  loading: boolean;
}
const AnimeInfo: React.FC<AnimeInfoProps> = ({
  title,
  titleJapanese,
  synopsis,
  loading,
}) => {
  return !loading && title ? (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h5" sx={{ fontSize: 24, fontWeight: "bold", mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ fontSize: 16 }}>
        Japanese: {titleJapanese}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 14, mt: 2 }}>
        {synopsis}
      </Typography>
    </Box>
  ) : (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
        <Skeleton height={40} sx={{ backgroundColor: "#b5b5b5" }} />
        <Skeleton width="80%" height={20} sx={{ backgroundColor: "#b5b5b5" }} />
        <Skeleton width="90%" height={60} sx={{ backgroundColor: "#b5b5b5" }} />
      </Box>
    </>
  );
};

export default AnimeInfo;
