import { getAlbuns } from "./services/api";
import Table from "./components/shared/table";

export default function Albuns() {
	return (
		<Table
			title={"Álbuns"}
			columns={[
				{ field: "userId", title: "Usuario" },
				{ field: "title", title: "Título" },
			]}
			getData={getAlbuns}
		/>
	);
}
