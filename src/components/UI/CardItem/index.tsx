import React from "react";
import {
  Box,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardItemProps {
  title: string;
  image: string;
  to: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, image, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box onClick={handleClick} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 300,
            objectFit: "cover",
            borderRadius: "4px 4px 0 0",
            cursor: "pointer",
          }}
        />
        <Box sx={{ textAlign: "center", p: 1, backgroundColor: "#e8e8e8", height: "80px", borderRadius: "0 0 4px 4px" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: "#1f1f1f",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,         // number of lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
              lineHeight: 1.2,     
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardItem;
