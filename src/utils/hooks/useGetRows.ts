import { IGetItemsByIdsParams, IGetRowsParams } from "../model/types";
import { preloaderStateSetted } from "../slices/preloaderStateSlice";
import { tableRowsAdded, tableRowsSetted } from "../slices/tableSlice";
import { baseApi } from "../api/baseApi";
import { useAppDispatch } from "./redux-hooks";

export function useGetRows() {
  const dispatch = useAppDispatch();

  function getRows({ offset, limit, toSet, extraFunc, setPreloader }: IGetRowsParams) {
    setPreloader && dispatch(preloaderStateSetted(true));

    baseApi.getIds({offset, limit})
      .then((res) => {
        getItemsByIds({ids: res.data.result, toSet, extraFunc});
      })
      .catch((err) => console.log(err));
  }

  function getItemsByIds({ ids, toSet, extraFunc }: IGetItemsByIdsParams) {
    baseApi.getItems(ids)
      .then((res) => {
        toSet ? dispatch(tableRowsSetted(res.data.result)) : dispatch(tableRowsAdded(res.data.result));
        dispatch(preloaderStateSetted(false));

        extraFunc && extraFunc();
      })
      .catch((err) => console.log(err))
  }

  return { getRows, getItemsByIds };
}
