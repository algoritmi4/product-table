export interface IRow {
  brand: string;
  id?: string;
  price: number;
  product: string;
}

export interface IGetRowsParams {
  offset: number;
  limit: number;
  toSet: boolean;
  extraFunc?: () => void;
  setPreloader?: boolean;
}

export interface IGetItemsByIdsParams {
  ids: string[];
  toSet: boolean;
  extraFunc?: () => void;
}

export interface IFilterValues {
  brand?: string;
  price?: number;
  product?: string;
}
