import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks';
import { ROWS_PER_PAGE } from '../../utils/model/constants';
import { nextPageSetted, prevPageSetted } from '../../utils/slices/paginationSlice';
import './PaginationController.css';
import { ReactElement } from "react";

function PaginationController(): ReactElement {
  const dispatch = useAppDispatch();
  const { length } = useAppSelector((state) => state.table);
  const { page } = useAppSelector((state) => state.pagination);
  const { isPreloaderActive } = useAppSelector((state) => state.preloaderState);

  const isFirstPage = page === 0;
  const isLastPage = (page + 1) >= Math.ceil(length/ROWS_PER_PAGE);

  return (
    <div className="pagination-control">
      <p className="pagination-control__counter">{`${page + 1}/${length ? Math.ceil(length/ROWS_PER_PAGE) : "0"}`}</p>
      <button type="button" onClick={() => dispatch(prevPageSetted())} className={`pagination-control__button${isFirstPage || isPreloaderActive ? " pagination-control__button_disabled" : ""}`} disabled={isFirstPage || isPreloaderActive}>&#8656;</button>
      <button type="button" onClick={() => dispatch(nextPageSetted())} className={`pagination-control__button${isLastPage || isPreloaderActive ? " pagination-control__button_disabled" : ""}`} disabled={isLastPage || isPreloaderActive}>&#8658;</button>
    </div>
  )
}

export default PaginationController;
