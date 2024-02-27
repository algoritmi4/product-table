import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    nextPageSetted: (state) => ({
      ...state, page: state.page + 1
    }),
    prevPageSetted: (state) => ({
      ...state, page: state.page - 1
    }),
    pageNumberSetted: (state, { payload: pageNumber }: { payload: number }) => ({
      ...state, page: pageNumber
    })
  }
})

export const { nextPageSetted, prevPageSetted, pageNumberSetted } = paginationSlice.actions

export default paginationSlice.reducer;
