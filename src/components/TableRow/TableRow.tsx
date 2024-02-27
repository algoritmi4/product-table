import { IRow } from '../../utils/model/types';
import TableCell from '../TableCell/TableCell';
import './TableRow.css';
import { ReactElement } from "react";

interface ITableRowProps {
  row: IRow;
}

function TableRow({ row }: ITableRowProps): ReactElement {
  return (
    <div className="table-row">
      {
        Object.keys(row).map((el, index) => <TableCell key={index} text={row[el as keyof IRow] || 'Неизвестно'} />)
      }
    </div>
  )
}

export default TableRow;
