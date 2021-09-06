import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./css/index.css";

import App from "./App";
import Albuns from "./albuns";
import Todos from "./todos";
import Posts from "./posts";

ReactDOM.render(
	<>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/postagens" component={Posts} />
				<Route exact path="/albuns" component={Albuns} />
				<Route exact path="/todos" component={Todos} />
				<Route path="*" component={App} />
			</Switch>
		</BrowserRouter>
	</>,
	document.getElementById("root")
);
