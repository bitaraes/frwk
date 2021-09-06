import { Link } from "react-router-dom";

export default function HomeCard({ title, description, route }) {
	return (
		<div className="home-menu-item">
			<h2>{title}</h2>
			<p>{description}</p>
			<div id="reload">
				<Link to={route}>
					<button>Ver Mais</button>
				</Link>
			</div>
		</div>
	);
}
