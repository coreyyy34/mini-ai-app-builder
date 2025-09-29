import type { TableComponent } from "@coreyyy34/mini-ai-app-builder-shared";
import type { FC } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

interface GeneratedTableProps {
	table: TableComponent;
}

export const GeneratedTable: FC<GeneratedTableProps> = ({ table }) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{table.columns.map((column, idx) => (
						<TableHead key={idx}>{column.header}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{table.rows.map((row, idx) => (
					<TableRow key={idx}>
						{table.columns.map((column, idxx) => (
							<TableCell
								key={idxx}
								style={{ textAlign: column.align }}
							>
								{row.cells[column.accessor]}
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
