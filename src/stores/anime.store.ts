import { create } from "zustand";
import { fetchAnimeDetail, fetchAnimeList } from "@/services/anime.service";
import { IAnime, IAnimeDetail, IAnimeQueryParams } from "@/models/anime.model";
import { IGlobalResponse } from "@/models/global.model";

interface AnimeState {
  data: IGlobalResponse<IAnime[]>;
  detail: IGlobalResponse<IAnimeDetail> | null;
  loading: boolean;
  error: string | null;
  fetchData: (params: IAnimeQueryParams) => Promise<void>;
  fetchDetail: (id: string) => Promise<void>;
}

export const useAnimeStore = create<AnimeState>((set) => ({
  data: {
    pagination: {
      last_visible_page: 0,
      has_next_page: false,
      current_page: 0,
      items: { count: 0, total: 0, per_page: 0 },
    },
    data: [],
  },
  loading: false,
  detail: null,
  error: null,
  fetchDetail: async (id: string) => {
    set({ loading: true, error: null, detail: null });
    try {
      const data = await fetchAnimeDetail(id);
      set({ detail: data });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "An unknown error occurred" });
      }
    } finally {
      set({ loading: false });
    }
  },
  fetchData: async (params: IAnimeQueryParams) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchAnimeList(params);
      if(data.status === 404 || data.status === 400) {
        set({ error: data.error || "Anime not found" });
      }else{
        set({ data });
      }

    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "An unknown error occurred" });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
