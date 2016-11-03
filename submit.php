<?php
/**
 * Created by LenovoUser.
 * Crated at: 11/3/2016 8:34 PM
 */
$vardas = $_POST['vardas'];
$pavadinimas = $_POST['pavadinimas'];

$masyvas = ['vardas' => $vardas, 'pavadinimas' => $pavadinimas];

var_dump($masyvas);