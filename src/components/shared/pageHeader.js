import { Link } from "react-router-dom";
import Container from "./container";
export default function PageHeader() {
	return (
		<header>
			<Container>
				<div id="header-container">
					<Link to="/">
						<p id="logo">FRWK</p>
					</Link>
					<nav className="header-nav">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/postagens">Postagens</Link>
							</li>
							<li>
								<Link to="/albuns">Álbuns</Link>
							</li>
							<li>
								<Link to="todos">To-Dos</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
}
