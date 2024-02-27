import { useDebounce } from 'use-debounce';
import './TableCellWithInput.css';
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks';
import { debouncedValueSetted } from '../../utils/slices/debouncedInputValuesSlice';
import { INPUT_DEBOUNCE_TIME } from '../../utils/model/constants';

interface ITableCellWithInputProps {
  text: string;
  inputName: string;
}

function TableCellWithInput({ text, inputName }: ITableCellWithInputProps): ReactElement {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue] = useDebounce(inputValue, INPUT_DEBOUNCE_TIME);
  const dispatch = useAppDispatch();
  const { isPreloaderActive } = useAppSelector((state) => state.preloaderState);

  useEffect(() => {
    dispatch(debouncedValueSetted({ inputName, value: debouncedValue }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <div className="table-cell-with-input">
      <p className="table-cell-with-input__text">{text}</p>
      <input
        type="search"
        className="table-cell-with-input__input"
        name={inputName}
        value={inputValue}
        onChange={handleInputChange}
        disabled={isPreloaderActive}
      />
    </div>
  )
}

export default TableCellWithInput;
