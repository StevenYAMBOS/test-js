// Fonction asynchrone
async function testAPI(url) {
    
    await fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
            expect(data.brand).toMatch(/Ford/);
            expect(data.model).toEqual('Mustang');
            expect(data.year).toBe(1969);
      })
}

test("Status : Keys matched", () => {
    return testAPI("https://api-test-jest.up.railway.app/test-get");
});