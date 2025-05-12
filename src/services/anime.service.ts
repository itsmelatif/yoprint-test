import api from "@/api/axios";
import { IGlobalResponse } from "@/models/global.model";
import { IAnime, IAnimeDetail, IAnimeQueryParams } from "@/models/anime.model";

export const fetchAnimeList = async (
  params: IAnimeQueryParams
): Promise<IGlobalResponse<IAnime[]>> => {
  const queryParams = new URLSearchParams();
  if (params.q) {
    queryParams.set("q", params.q);
  }
  if (params.page) {
    queryParams.set("page", params.page.toString());
  }
  if (params.limit) {
    queryParams.set("limit", params.limit.toString());
  }
  if (params.order_by) {
    queryParams.set("order_by", params.order_by);
  }
  if (params.sort) {
    queryParams.set("sort", params.sort);
  }
  const response = await api.get<IGlobalResponse<IAnime[]>>(
    `/anime?${queryParams.toString()}`
  );
  return response.data;
};

export const fetchAnimeDetail = async (
  id: string
): Promise<IGlobalResponse<IAnimeDetail>> => {
  const response = await api.get<IGlobalResponse<IAnimeDetail>>(
    `/anime/${id}/full`
  );
  if (response.status === 404 || response.status === 400) {
    console.log(response);
    throw new Error(response.data.error || "Anime not found");
  }
  return response.data;
};
