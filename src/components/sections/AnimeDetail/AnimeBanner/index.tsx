import React from "react";
import { Skeleton, CardMedia } from "@mui/material";

interface AnimeBannerProps {
  image?: string;
  title?: string;
  loading: boolean;
}

const AnimeBanner: React.FC<AnimeBannerProps> = ({ image, title, loading }) => {
  return !loading && image ? (
    <CardMedia
      component="img"
      image={image}
      alt={title}
      loading={'lazy'}
      sx={{
        width: "100%",
        height: 350,
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: 1,
      }}
    />
  ) : (
    <Skeleton width="100%" height={350} sx={{ backgroundColor: "#b5b5b5" }} />
  );
};

export default AnimeBanner;
