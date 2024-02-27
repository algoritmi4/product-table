import './TableCell.css';
import { ReactElement } from "react";

interface ITabelCellProps {
  text: string | number;
}

function TableCell({ text }: ITabelCellProps): ReactElement {
  return (
    <div className="table-cell">
      <p className="table-cell__text">{text}</p>
    </div>
  )
}

export default TableCell;
