import React from "react";
import Container from "./components/shared/container";
import Pagefooter from "./components/shared/pageFooter";
import PageHeader from "./components/shared/pageHeader";
import HomeCard from "./components/home/homeCard";

function App() {
	return (
		<>
			<PageHeader />
			<Container>
				<div className="home">
					<div className="home-menu">
						<HomeCard
							title="Postagens"
							description="Confira todas as postagens!"
							route="/postagens"
						/>
						<HomeCard
							title="Álbuns"
							description="Veja oque há de novo nos álbuns!"
							route="/albuns"
						/>
						<HomeCard
							title="To-Dos"
							description="Verifique as tarefas, feitas ou não!"
							route="/todos"
						/>
					</div>
				</div>
			</Container>

			<Pagefooter />
		</>
	);
}

export default App;
