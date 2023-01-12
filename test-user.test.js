async function testUSER(url) {
    await fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        // "data.x" car on récupère la réponse depuis data 
        expect(data.id).toBeGreaterThan(100);
        // "Not" pour vérifier que les valeurs soient nulles 
        expect(data.firstName).not.toBeNull();
        expect(data.lastName).not.toBeNull();
      })
}
test("Status : Keys matched", () => {
    for(i = 0; i < 20; i++){
        return testUSER("https://api-test-jest.up.railway.app/test-user");
    }

    // Fonction pour l'Email
    async function testEmail(){
        await fetch(url).then(function(response){
            return response.json();
        }).then(function(data){
            // Pour valider l'email on utilise le REGEX
            expect(data.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        })
    }

    // Fonction pour "RegisteredAt"
    async function testRegisteredAt(){

        const date = new Date("2020-01-01");
        await fetch(url).then(function(response){
            return response.json();
        }).then(function(data){
            expect(data.registeredAt.split("T")[0]).toMatch(/\d{4}-\d{2}-\d{2}/);
            // "date" = variable crééee et pas la Date dans JavaScript  
            expect(data.registeredAt.split("T")[0]).toBe > date;
        })
    }
});