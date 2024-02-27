import PaginationController from '../PaginationController/PaginationController';
import './TableFooter.css';
import { ReactElement } from "react";

function TableFooter(): ReactElement {
  return (
    <footer className="table-footer">
      <PaginationController />
    </footer>
  )
}

export default TableFooter;
