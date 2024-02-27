import { createSlice } from "@reduxjs/toolkit";
import { IRow } from "../model/types";
import { deleteRepeatedIds } from "./lib/deleteRepeatedIdsFunc";

interface IInitialState {
  rows: IRow[];
  length: number;
  isFiltered: boolean;
}

const initialState: IInitialState = {
  rows: [],
  length: 0,
  isFiltered: false
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    tableRowsSetted: (state, { payload: rows }: { payload: IRow[] }) => {
      const { rowsToAdd } = deleteRepeatedIds(rows);
      const length = rowsToAdd.length;

      return {...state, length, rows: rowsToAdd}
    },
    tableRowsAdded: (state, { payload: rows }: { payload: IRow[] }) => {
      const { rowsToAdd } = deleteRepeatedIds(rows);
      const length = state.length + rowsToAdd.length;

      return {...state, length, rows: [...state.rows, ...rowsToAdd]}
    },
    isFilteredSetted: (state, { payload: isFiltered }: { payload: boolean }) => ({
      ...state, isFiltered
    })
  }
})

export const { tableRowsSetted, tableRowsAdded, isFilteredSetted } = tableSlice.actions;

export default tableSlice.reducer;
