function testHealtcheck(url) {
	return fetch(url).then((response) => {
		// Pas besoin de "if" ici
		expect(response.status).toEqual(200);
		expect(response.status).not.toBeGreaterThanOrEqual(400);
	});
}

test("Status : Request fullfiled", () => {
	return testHealtcheck("https://api-test-jest.up.railway.app/healthcheck");
});