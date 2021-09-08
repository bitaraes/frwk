import React from "react";
import Table from "./components/shared/table";
import { getTodos } from "./services/api";

export default function Todos() {
	return (
		<>
			<Table
				title={"To-Dos"}
				columns={[
					{ field: "userId", title: "Usuário" },
					{ field: "title", title: "Título" },
					{ field: "completed", title: "Completado" },
				]}
				getData={getTodos}
			/>
		</>
	);
}
