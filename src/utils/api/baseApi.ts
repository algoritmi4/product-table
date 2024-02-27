import { IFilterValues } from "../model/types";
import { instance } from "./apiInstance";

class BaseApi {
  getIds({ offset, limit }: { offset: number; limit: number; }) {
    return instance.post('', {
      action: 'get_ids',
      params: { offset, limit }
    })
  }

  getItems(ids: string[]) {
    return instance.post('', {
      action: 'get_items',
      params: { ids }
    })
  }

  getFiltredIds(params: IFilterValues) {
    return instance.post('', {
      action: 'filter',
      params
    })
  }
}

export const baseApi = new BaseApi();
