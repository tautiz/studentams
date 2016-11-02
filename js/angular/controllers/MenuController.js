app.controller('MenuController', menuController);

function menuController(){
    console.log('Loaded MenuController.');

    var vm = this;

    vm.meniu = [
        {pavadinimas: "Pradžia", adresas: "#/"},
        {pavadinimas: "Apie", adresas: "#/apie"},
        {pavadinimas: "Kontaktai", adresas: "#/kontaktai"},
        {pavadinimas: "Galerija", adresas: "#/galerija"}
    ];

}
