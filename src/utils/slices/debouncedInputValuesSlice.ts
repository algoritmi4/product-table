import { createSlice } from "@reduxjs/toolkit";

interface IAction {
  inputName: string;
  value: string;
}

const initialState = {
  brand: '',
  price: '',
  product: ''
}

const debouncedInputValuesSlice = createSlice({
  name: 'debouncedInputValues',
  initialState,
  reducers: {
    debouncedValueSetted: (state, { payload: inputInfo }: { payload: IAction }) => ({
      ...state, [inputInfo.inputName]: inputInfo.value
    })
  }
})

export const { debouncedValueSetted } = debouncedInputValuesSlice.actions;

export default debouncedInputValuesSlice.reducer;
