import { IAnime } from "@/models/anime.model";
import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export interface ICardListItemProps {
  data: IAnime;
}

const CardListItem: React.FC<ICardListItemProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${data.mal_id}`);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        width: "100%",
        backgroundColor: "#e8e8e8",
        borderRadius: 2,
        p: 1,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CardMedia
          component="img"
          image={data.images.jpg.image_url}
          alt={data.title}
          sx={{
            width: 60,
            height: 60,
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
        <Box sx={{ width: "400px" }}>
          <Typography variant="body1" sx={{ fontSize: 13, fontWeight: 500 }}>
            {data.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 10, fontWeight: 500 }}>
            Japanese: {data.title_japanese}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 3, pr: 1 }}>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            gap: 3,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "center", flex: 1, width: "150px" }}>
            <Typography variant="h6" sx={{ fontSize: 13, fontWeight: 500 }}>
              {data.score || "-"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: 10 }}
            >
              Score
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", flex: 1 }}>
            <Typography variant="h6" sx={{ fontSize: 13, fontWeight: 500 }}>
              {data.members || "-"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: 10 }}
            >
              Members
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", flex: 1 }}>
            <Typography variant="h6" sx={{ fontSize: 13, fontWeight: 500 }}>
              {data.episodes || "-"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: 10 }}
            >
              Episodes
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardListItem;
