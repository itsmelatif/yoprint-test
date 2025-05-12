import React, { useEffect, useState } from "react";
import { useAnimeStore } from "@/stores/anime.store";
import { SearchInput, ToastNotification } from "@/components/UI";
import { IAnimeQueryParams } from "@/models/anime.model";
import { ListAnime, SortAndViewSwitcher } from "@/components/sections";
import { Box, Typography } from "@mui/material";
import { PER_PAGE_OPTIONS, SORT_OPTIONS } from "@/constant/global";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { data, loading, error, fetchData } = useAnimeStore();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState<IAnimeQueryParams>({
    page: 1,
    limit: PER_PAGE_OPTIONS[0],
    order_by: "title",
    sort: "asc",
    q: undefined,
  });

  const [toastConfig, setToastConfig] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "error",
  });

  const updateSearchQuery = (newValues: Partial<IAnimeQueryParams>) => {
    setSearchQuery((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const handleSearch = (query: string) => {
    updateSearchQuery({ q: query });
  };

  const handleChangePage = (page: number) => {
    updateSearchQuery({ page });
  };

  const handleChangePerPage = (perPage: number) => {
    updateSearchQuery({ page: 1, limit: perPage });
  };

  const handleResetData = () => {
    updateSearchQuery({
      page: 1,
      limit: PER_PAGE_OPTIONS[0],
      order_by: "title",
      sort: "asc",
      q: undefined,
    });
  };

  const handleSortByChange = (value: string) => {
    updateSearchQuery({ page: 1, order_by: value });
  };

  const handleSortOrderChange = (value: "asc" | "desc") => {
    updateSearchQuery({ page: 1, sort: value });
  };

  const handleCloseToast = () => {
    setToastConfig({
      open: false,
      message: "",
      severity: "error",
    });
  };

  useEffect(() => {
    fetchData(searchQuery);
  }, [fetchData, searchQuery]);

  useEffect(() => {
    if (error) {
      setToastConfig({
        open: true,
        message: error || "Something went wrong. Please try again later.",
        severity: "error",
      });
    }
  }, [error]);

  return (
    <div>
      <SearchInput
        value={searchQuery.q || ""}
        placeholder={t("search")}
        onSearch={handleSearch}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 6,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "#1f1f1f" }}>
          {t("animeList")}
        </Typography>
        <SortAndViewSwitcher
          sortBy={searchQuery.order_by || "title"}
          sortOrder={searchQuery.sort || "asc"}
          view={view}
          onSortByChange={handleSortByChange}
          onSortOrderChange={handleSortOrderChange}
          onViewChange={setView}
          sortOptions={SORT_OPTIONS}
        />
      </Box>

      <ListAnime
        view={view}
        data={data?.data || []}
        loading={loading}
        total={data?.pagination?.items?.total}
        page={searchQuery.page}
        perPage={searchQuery.limit}
        onChangePage={handleChangePage}
        onChangePerPage={handleChangePerPage}
        onResetData={handleResetData}
      />

      <ToastNotification
        open={toastConfig.open}
        message={toastConfig.message}
        severity={toastConfig.severity}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default Home;
