const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
	const url = `${BASE_URL}/posts`;
	const response = await fetch(url, {
		method: "GET",
	});
	const json = await response.json();
	const res = Array.from(json);

	return res;
}

export async function getAlbuns() {
	const url = `${BASE_URL}/albums`;
	const response = await fetch(url, {
		method: "GET",
	});
	const json = await response.json();
	const res = Array.from(json);

	return res;
}

export async function getTodos() {
	const url = `${BASE_URL}/todos`;
	const response = await fetch(url, {
		method: "GET",
	});
	const json = await response.json();
	const res = Array.from(json);

	return res;
}
