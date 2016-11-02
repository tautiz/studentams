angular.module('stdApp', []).controller('FirstController', function (){
    console.log('Loaded FirstController.');

    var vm = this;

    vm.pavadinimas = "Angular ciklas";

    vm.masyvas = [
        '1',
        '2',
        '3',
        '4'
    ];

    vm.spausti = function(){
        alert('Veikia...');
    }

} );
