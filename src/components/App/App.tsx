import { useEffect } from 'react';
import TableFooter from '../TableFooter/TableFooter';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import './App.css';
import { useAppSelector } from '../../utils/api/hooks';
import { ROWS_PER_PAGE } from '../../utils/model/constants';
import { useGetRows } from '../../utils/api/lib/useGetRows';
import Preloader from '../Preloader/Preloader';

function App() {
  const { rows, length, isFiltered } = useAppSelector((state) => state.table);
  const { page } = useAppSelector((state) => state.pagination);
  const { isPreloaderActive } = useAppSelector((state) => state.preloaderState);
  const { getRows } = useGetRows();

  useEffect(() => {
    if (length === 0) {
      getRows({ offset: 0, limit: ROWS_PER_PAGE * 2, toSet: true, setPreloader: true });
    } else if ((page + 1) * ROWS_PER_PAGE >= length && !isFiltered) {
      getRows({ offset: (page + 1) * ROWS_PER_PAGE, limit: ROWS_PER_PAGE, toSet: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <TableHeader />
      <main className="content">
        {
          isPreloaderActive ? (
            <div className="content__preloader">
              <Preloader />
            </div>
          ) : (
              length === 0 ? (
                <div className="content__preloader">
                  <h1 className="content__text">Ваш запрос не дал результатов или сервер не отвечает. Попробуйте изменить поисковые запросы или перезагрузить страницу.</h1>
                </div>
              ) : (
                rows.slice(page*50).map((row, index) => <TableRow row={row} key={index}/>)
              )
          )
        }
      </main>
      <TableFooter />
    </>
  )
}

export default App;
