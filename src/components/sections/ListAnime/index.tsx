import React from "react";
import { CardItem, Paginator } from "@/components/UI";
import { IAnime } from "@/models/anime.model";
import { Typography, Box, Skeleton, Button, IconButton } from "@mui/material";
import { PER_PAGE_OPTIONS } from "@/constant/global";
import CardListItem from "../CardListItem";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { Refresh } from "@mui/icons-material";
export interface IListAnimeProps {
  view?: "grid" | "list";
  data: IAnime[];
  loading?: boolean;
  total?: number;
  page?: number;
  perPage?: number;
  onChangePage: (page: number) => void;
  onChangePerPage: (perPage: number) => void;
  onResetData: () => void;
}

const ListAnime: React.FC<IListAnimeProps> = ({
  view = "grid",
  data,
  loading,
  total,
  page,
  perPage,
  onChangePage,
  onChangePerPage,
  onResetData,
}) => {
  const { t } = useTranslation();
  const renderContent = () => {
    if (loading) {
      return Array.from({ length: 10 }).map((_, idx) => (
        <LoadingSkeleton key={idx} view={view} />
      ));
    }

    if (data.length === 0) {
      return <NoDataMessage resetData={onResetData} t={t} />;
    }

    return view === "grid" ? (
      <GridView data={data} />
    ) : (
      <ListView data={data} />
    );
  };

  return (
    <Box component="section" sx={{ mt: 2, mb: 6, width: "100%" }}>
      <motion.div
        key={view}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.div>

      {!loading && (
        <Box sx={{ mt: 10 }}>
          <Paginator
            total={total || 0}
            page={page || 1}
            perPage={perPage || PER_PAGE_OPTIONS[0]}
            onChangePage={onChangePage}
            onChangePerPage={onChangePerPage}
            label={`${t("showingPagination", {
              start: 1,
              end: perPage,
              total: total,
            })}`}
          />
        </Box>
      )}
    </Box>
  );
};

const GridView: React.FC<{ data: IAnime[] }> = ({ data }) => (
  <Box component="section" sx={{ mt: 2, mb: 6 }}>
    <Box
      sx={{
        mb: 6,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 3,
        "@media (max-width: 1200px)": {
          gridTemplateColumns: "repeat(3, 1fr)",
        },
        "@media (max-width: 900px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media (max-width: 600px)": {
          gridTemplateColumns: "1fr",
        },
      }}
    >
      {data.map((item, idx) => (
        <CardItem
          key={idx}
          title={item.title}
          image={item.images.jpg.image_url}
          to={`/detail/${item.mal_id}`}
        />
      ))}
    </Box>
  </Box>
);

const ListView: React.FC<{ data: IAnime[] }> = ({ data }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    {data.map((item, idx) => (
      <CardListItem key={idx} data={item} />
    ))}
  </Box>
);

const LoadingSkeleton: React.FC<{ view: "grid" | "list" }> = ({ view }) =>
  view === "grid" ? (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Skeleton height={350} sx={{ backgroundColor: "#b5b5b5" }} />
      <Skeleton width="100%" sx={{ backgroundColor: "#b5b5b5" }} />
      <Skeleton width="80%" sx={{ backgroundColor: "#b5b5b5" }} />
      <Skeleton width="80%" sx={{ backgroundColor: "#b5b5b5" }} />
    </Box>
  ) : (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Skeleton height={100} sx={{ backgroundColor: "#b5b5b5" }} />
    </Box>
  );

const NoDataMessage: React.FC<{ resetData: () => void; t: TFunction }> = ({
  resetData,
  t,
}) => (
  <Typography
    variant="h6"
    sx={{
      color: "#555",
      display: "flex",
      alignItems: "start",
      flexDirection: "column",
      gap: 1,
    }}
  >
    {t("noData")}
    <Button
      variant="contained"
      color="primary"
      onClick={resetData}
      size="small"
      sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}
    >
      <IconButton onClick={resetData} sx={{ color: "#fff" }}>
        <Refresh />
      </IconButton>
      {t("resetData")}
    </Button>
  </Typography>
);

export default ListAnime;
