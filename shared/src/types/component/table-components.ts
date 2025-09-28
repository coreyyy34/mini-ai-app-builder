import { BaseComponent } from "./base-components";

export type TableAlignment = "left" | "center" | "right";
export type TableCellValue = string | number | boolean | null;

export interface TableComponent extends BaseComponent {
	type: "table";
	columns: TableColumnComponent[];
	rows: TableRowComponent[];
}

export interface TableColumnComponent {
	header: string;
	accessor: string;
	align?: TableAlignment;
}

export interface TableRowComponent {
	cells: {
		[key: string]: string;
	};
}
