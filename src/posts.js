import React from "react";
import Table from "./components/shared/table";
import { getPosts } from "./services/api";

function Posts() {
	return (
		<Table
			title={"Postagens"}
			columns={[
				{ field: "id", title: "Id" },
				{ field: "title", title: "Título" },
				{ field: "body", title: "Postagens" },
			]}
			getData={getPosts}
		/>
	);
}

export default Posts;
