export interface IGlobalResponse<T> {
  pagination?: IPagination;
  data: T;
  status?: number;
  error?: string;
}

export interface IPagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: IPaginationItems;
}

export interface IPaginationItems {
  count: number;
  total: number;
  per_page: number;
}
