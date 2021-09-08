import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "./container";
export default function PageHeader() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<header>
			<Container>
				<div id="header-container">
					<Link to="/">
						<p id="logo">FRWK</p>
					</Link>
					<div className="mobile-menu">
						<Button onClick={handleClick}>
							<MenuIcon></MenuIcon>
						</Button>
						<Menu
							id="resp-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<Link to="/">
								<MenuItem>Home</MenuItem>
							</Link>
							<Link to="/postagens">
								<MenuItem>Postagens</MenuItem>
							</Link>
							<Link to="/albuns">
								<MenuItem>Álbuns</MenuItem>
							</Link>
							<Link to="/todos">
								<MenuItem>To-Dos</MenuItem>
							</Link>
						</Menu>
					</div>
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
