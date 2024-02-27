import { IRow } from "../../model/types";

export function deleteRepeatedIds(rows: IRow[]) {
  const rowsToAdd: IRow[] = [];

  rows.forEach((row) => {
    if (rowsToAdd.some((el) => el.id === row.id)) {
      return
    } else {
      rowsToAdd.push(row);
    }
  });

  return { rowsToAdd };
}
