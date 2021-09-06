import React, { useState, useEffect } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import Container from "./container";
import Content from "./content";
import Pagefooter from "./pageFooter";
import PageHeader from "./pageHeader";

export default function Table({ columns, getData, title }) {
	const [allData, setAllData] = useState([]);
	const [data, setData] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [itensPage, setItensPage] = useState(5);

	const [orderBy, setOrderBy] = useState({ field: "id", asc: true });
	const [filter, setFilter] = useState("");

	useEffect(() => {
		async function execute() {
			const newState = [...allData].filter((post) => {
				return columns.find((column) =>
					post[column.field]
						.toString()
						.replaceAll("\n", " ")
						.includes(filter)
				);
			});

			newState.sort((a, b) => {
				if (orderBy.asc) {
					return a[orderBy.field] > b[orderBy.field] ? 1 : -1;
				}
				return a[orderBy.field] < b[orderBy.field] ? 1 : -1;
			});
			setData(newState.slice(0, itensPage * totalPages));
		}
		execute();
	}, [allData, totalPages, itensPage, orderBy, filter, columns]);

	useEffect(() => {
		async function execute() {
			const newData = await getData();
			setAllData(newData);
		}
		execute();
	}, [getData]);

	function loadMoreData() {
		setTotalPages(totalPages + 1);
	}

	return (
		<div>
			<PageHeader></PageHeader>
			<Container>
				<Content>
					<div className="data-table">
						<h2>{title}</h2>
						<div className="search-box">
							<div className="search-box-item">
								<div className="itens-quantity">
									<span>Mostrar </span>
									<select
										onChange={(e) => {
											setItensPage(e.target.value);
										}}
									>
										<option value="5">5</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
									</select>
									<span> itens</span>
								</div>
							</div>
							<div className="search-box-item">
								<div className="itens-filter">
									<label>Pesquisar: </label>
									<input
										type="search"
										onChange={(e) =>
											setFilter(e.target.value)
										}
									></input>
								</div>
							</div>
						</div>
						<table>
							<thead>
								<tr>
									{columns.map((column) => (
										<th
											onClick={() =>
												setOrderBy({
													field: column.field,
													asc: !orderBy.asc,
												})
											}
										>
											{column.title}
											<AiOutlineArrowDown />
											<AiOutlineArrowUp />
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{data.map((atual) => (
									<tr key={atual.id}>
										{columns.map((column) => (
											<td
												key={
													atual[
														column.field + atual.id
													]
												}
											>
												{atual[column.field].toString()}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
						{data.length < allData.length && (
							<div id="reload">
								<button onClick={loadMoreData}>Ver Mais</button>
							</div>
						)}
					</div>
				</Content>
			</Container>
			<Pagefooter />
		</div>
	);
}
