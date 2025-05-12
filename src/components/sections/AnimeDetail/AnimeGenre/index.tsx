import React from "react";
import { Box, Chip, Skeleton, Typography } from "@mui/material";

interface AnimeGenresProps {
  genres: { mal_id: number; name: string }[];
  loading: boolean;
}

const AnimeGenres: React.FC<AnimeGenresProps> = ({ genres = [], loading }) => {
  return (
    <Box sx={{ mt: 2 }}>
      {!loading ? (
        <>
          <Typography variant="h6" sx={{ fontSize: 16, mt: 2 }}>
            Genres:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5}}>
            {genres.length > 0 ? (
              genres.map((genre) => (
                <Chip key={genre.mal_id} label={genre.name} />
              ))
            ) : (
              <Typography variant="body1" sx={{ fontSize: 14, mt: 2 }}>
                No genres available
              </Typography>
            )}
          </Box>
        </>
      ) : (
        <>
          <Skeleton height={30} width="30%" sx={{ backgroundColor: "#b5b5b5" }} />
          <Skeleton height={40} width="100%" sx={{ backgroundColor: "#b5b5b5", mt: 1 }} />
        </>
      )}
    </Box>
  );
};

export default AnimeGenres;
