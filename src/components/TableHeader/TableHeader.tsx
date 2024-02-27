import { baseApi } from '../../utils/api/baseApi';
import { useAppDispatch, useAppSelector } from '../../utils/api/hooks';
import { useGetRows } from '../../utils/api/lib/useGetRows';
import { ROWS_PER_PAGE } from '../../utils/model/constants';
import { IFilterValues, IRow } from '../../utils/model/types';
import { pageNumberSetted } from '../../utils/slices/paginationSlice';
import { preloaderStateSetted } from '../../utils/slices/preloaderStateSlice';
import { isFilteredSetted } from '../../utils/slices/tableSlice';
import TableCell from '../TableCell/TableCell';
import TableCellWithInput from '../TableCellWithInput/TableCellWithInput';
import './TableHeader.css';
import { ReactElement, useEffect } from "react";

function TableHeader(): ReactElement {
  const { brand, price, product } = useAppSelector((state) => state.debouncedInputValues);
  const { isFiltered } = useAppSelector((state) => state.table);
  const dispatch = useAppDispatch();
  const { getRows, getItemsByIds } = useGetRows();

  useEffect(() => {
    if (brand || price || product) {
      dispatch(pageNumberSetted(0));

      const obj = {brand, price: Number(price), product};
      const { objToAdd } = deleteEmplyLinesFromObject(obj);

      getFilteredItems(objToAdd);
    } else {
      if (isFiltered) {
        dispatch(pageNumberSetted(0));

        getRows({offset: 0, limit: ROWS_PER_PAGE * 2, toSet: true, extraFunc: () => dispatch(isFilteredSetted(false)), setPreloader: true})
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, price, product]);

  function deleteEmplyLinesFromObject(obj: IRow) {
    const objToAdd = Object.keys(obj).reduce((acc, el) => {
      const elemValue = obj[el as keyof IRow];

      if (elemValue) {
        return {...acc, [el]: elemValue};
      }

      return acc;
    }, {});

    return { objToAdd };
  }

  function getFilteredItems(filterValues: IFilterValues) {
    dispatch(preloaderStateSetted(true));

    baseApi.getFiltredIds(filterValues)
    .then((res) => {
      getItemsByIds({ ids: res.data.result, toSet: true, extraFunc: () => dispatch(isFilteredSetted(true))});
    })
    .catch((err) => console.log(err));
  }

  return (
    <header className="table-header">
      <TableCellWithInput text='Бренд' inputName='brand' />
      <TableCell text='id' />
      <TableCellWithInput text='Цена' inputName='price' />
      <TableCellWithInput text='Название' inputName='product' />
    </header>
  )
}

export default TableHeader;
