app.controller('FirstController', firstController);

function firstController(){
    console.log('Loaded FirstController.');

    var vm = this;

    vm.pavadinimas = "Angular ciklas";

    vm.masyvas = [
        '1 elementas',
        '2 elementas',
        '3 elementas',
        '4 elementas',
        '5 elementas',
        '6 elementas',
        '7 elementas',
        '8 elementas',
        '9 elementas',
        '10 elementas',
        '11 elementas'
    ];

    vm.spausti = function(){
        alert('Veikia...');
    }

}
