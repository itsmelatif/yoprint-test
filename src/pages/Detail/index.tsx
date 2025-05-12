import { Box, Button, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAnimeStore } from "@/stores/anime.store";
import {
  AnimeBanner,
  AnimeThumbnail,
  AnimeDescription,
  AnimeGenre,
} from "@/components/sections";
import { ArrowBack } from "@mui/icons-material";
import { ToastNotification } from "@/components/UI";
const Detail: React.FC = () => {
  const { id } = useParams();
  const { detail, loading, fetchDetail, error } = useAnimeStore();
  const [toastConfig, setToastConfig] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "error",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchDetail(id);
  }, [id, fetchDetail]);

  useEffect(() => {
    if (error) {
      setToastConfig({
        open: true,
        message: error || "Something went wrong. Please try again later.",
        severity: "error",
      });
      navigate("/");
    }
  }, [error, navigate]);

  const handleCloseToast = () => {
    setToastConfig({
      open: false,
      message: "",
      severity: "error",
    });
  };

  const anime = detail?.data;

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <AnimeBanner
        image={anime?.images.jpg.large_image_url}
        title={anime?.title}
        loading={loading}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          pt: 4,
          pb: 4,
          gap: 4,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <AnimeThumbnail
            image={anime?.images.jpg.image_url}
            title={anime?.title}
            loading={loading}
          />
          {!anime?.title || loading ? (
            <Skeleton variant="rectangular" width={100} height={40} />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                width: "100%",
              }}
            >
              <ArrowBack /> Back
            </Button>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <AnimeDescription
            title={anime?.title}
            titleJapanese={anime?.title_japanese}
            synopsis={anime?.synopsis}
            loading={loading}
          />
          <AnimeGenre genres={anime?.genres || []} loading={loading} />
        </Box>
      </Box>

      <ToastNotification
        open={toastConfig.open}
        message={toastConfig.message}
        severity={toastConfig.severity}
        onClose={handleCloseToast}
      />
    </Box>
  );
};

export default Detail;
