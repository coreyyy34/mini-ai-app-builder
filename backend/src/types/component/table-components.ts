import { BaseComponent } from "./base-components";

export type TableAlignment = "left" | "center" | "right";
export type TableCellValue = string | number | boolean | null;

export interface TableComponent extends BaseComponent {
	type: "table";
	details: {
		columns: TableColumnComponent[];
		rows: TableRowComponent[];
	};
}

export interface TableColumnComponent extends BaseComponent {
	type: "tableColumn";
	details: {
		header: string;
		accessor: string;
		align?: TableAlignment;
	};
}

export interface TableRowComponent extends BaseComponent {
	type: "tableRow";
	details: {
		cells: TableCellComponent[];
	};
}

export interface TableCellComponent extends BaseComponent {
	type: "tableCell";
	details: {
		value?: TableCellValue;
	};
}
