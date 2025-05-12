import { Box, Button, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAnimeStore } from "@/stores/anime.store";
import {
  AnimeBanner,
  AnimeThumbnail,
  AnimeDescription,
  AnimeGenre,
} from "@/components/sections";
import { ArrowBack } from "@mui/icons-material";
const Detail: React.FC = () => {
  const { id } = useParams();
  const { detail, loading, fetchDetail } = useAnimeStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchDetail(id);
  }, [id, fetchDetail]);

  const anime = detail?.data;

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <AnimeBanner
        image={anime?.images.jpg.large_image_url}
        title={anime?.title}
        loading={loading}
      />

      <Box sx={{ display: "flex", alignItems: "start", justifyContent: "start", pt: 4, pb: 4, gap: 4, width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "start", justifyContent: "start"}}>
          <AnimeThumbnail
            image={anime?.images.jpg.image_url}
            title={anime?.title}
            loading={loading}
          />
          {!anime?.title || loading ? (
            <Skeleton variant="rectangular" width={100} height={40} />
          ) : (
            <Button variant="contained" color="primary" onClick={() => navigate("/")} sx={{ display: "flex", alignItems: "center", gap: 1,width: "100%" }}>
              <ArrowBack /> Back
            </Button>
          )}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
          <AnimeDescription
            title={anime?.title}
            titleJapanese={anime?.title_japanese}
            synopsis={anime?.synopsis}
            loading={loading}
          />
          <AnimeGenre genres={anime?.genres || []} loading={loading} />
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
