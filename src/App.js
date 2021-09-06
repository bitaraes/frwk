import React from "react";
import { Link } from "react-router-dom";
import Container from "./components/shared/container";
import Pagefooter from "./components/shared/pageFooter";
import PageHeader from "./components/shared/pageHeader";

function App() {
	return (
		<>
			<PageHeader />
			<Container>
				<div className="home">
					<div className="home-menu">
						<div className="home-menu-item">
							<h2>Postagens</h2>
							<p>Confira todas as postagens!</p>
							<div id="reload">
								<Link to="/postagens">
									<button>Ver Mais</button>
								</Link>
							</div>
						</div>
						<div className="home-menu-item">
							<h2>Álbuns</h2>
							<p>Veja oque há de novo nos álbuns!</p>
							<div id="reload">
								<Link to="/Álbuns">
									<button>Ver Mais</button>
								</Link>
							</div>
						</div>
						<div className="home-menu-item">
							<h2>To-Dos</h2>
							<p>Verifique as tarefas, feitas ou não!</p>
							<div id="reload">
								<Link to="/To-Dos">
									<button>Ver Mais</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<Pagefooter />
		</>
	);
}

export default App;
