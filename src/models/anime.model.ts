
export interface IAnimeQueryParams {
  q?: string;
  page: number;
  limit: number;
  order_by?: string;
  sort?: 'desc' | 'asc';
}

export interface IAnime {
  mal_id: number;
  url: string;
  images: IImages;
  trailer: ITrailer;
  approved: boolean;
  titles: ITitle[];
  title: string;
  title_english?: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes?: number;
  status: string;
  airing: boolean;
  aired: IAired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season?: string;
  year?: number;
  broadcast: IBroadcast;
  producers: IProgGeneral[];
  licensors: IProgGeneral[];
  studios: IProgGeneral[];
  genres: IProgGeneral[];
  explicit_genres: any[];
  themes: IProgGeneral[];
  demographics: IProgGeneral[];
}

export interface IAnimeDetail extends IAnime {
  relations: IRelation[]
  theme: ITheme2
  external: IExternal[]
  streaming: IExternal[]
}

export interface IImages {
  jpg: IPropsMedia;
  webp: IPropsMedia;
}

export interface IPropsMedia {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface ITrailer {
  youtube_id?: string;
  url?: string;
  embed_url?: string;
  images: IImages;
}

export interface IImages2 extends IPropsMedia {
  maximum_image_url?: string;
}

export interface ITitle {
  type: string;
  title: string;
}

export interface IAired {
  from: string;
  to?: string;
  prop: IProp;
  string: string;
}

export interface IProp {
  from: IDate;
  to: IDate;
}

export interface IDate {
  day: number;
  month: number;
  year: number;
}

export interface IBroadcast {
  day?: string;
  time?: string;
  timezone?: string;
  string?: string;
}

export interface IProgGeneral {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}


export interface IRelation {
  relation: string
  entry: IEntry[]
}

export interface IEntry {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface ITheme2 {
  openings: string[]
  endings: string[]
}

export interface IExternal {
  name: string
  url: string
}