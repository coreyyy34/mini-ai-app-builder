import { BaseComponent } from "./base-components";

export type TableAlignment = "left" | "center" | "right";
export type TableCellValue = string | number | boolean | null;

export interface TableComponent extends BaseComponent {
	type: "table";
	columns: TableColumnComponent[];
	rows: TableRowComponent[];
}

export interface TableColumnComponent extends BaseComponent {
	type: "tableColumn";
	header: string;
	accessor: string;
	align?: TableAlignment;
}

export interface TableRowComponent extends BaseComponent {
	type: "tableRow";
	cells: TableCellComponent[];
}

export interface TableCellComponent extends BaseComponent {
	type: "tableCell";
}
