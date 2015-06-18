// ==UserScript==
// @name Tribal War Troops Time Calculator
// @include *.guerretribale.fr/game.php?village=*&id=*&type=other&screen=info_command
// ==/UserScript==

javascript:

    var tab = $('#content_value').html();
var save = $('#content_value').text();
var temp_source = save.match(/OrigineJoueur :[\S\s]+\(\d{3}\|\d{3}\)/).toString();
var temp_cible = save.match(/DestinationJoueur :[\S\s]+\(\d{3}\|\d{3}\)/).toString();

var source = temp_source.match(/\d{3}\|\d{3}/).toString();
var cible = temp_cible.match(/\d{3}\|\d{3}/).toString();

var sourcex = source.match(/^\d{3}/);
var sourcey = source.match(/\d{3}$/);

var ciblex = cible.match(/^\d{3}/);
var cibley = cible.match(/\d{3}$/);

var distancex = Math.abs(ciblex - sourcex);
var distancey = Math.abs(cibley - sourcey);

var distance = Math.sqrt(Math.pow(distancex, 2) + Math.pow(distancey, 2));

var multiplicateur = 1;
var minute = (60 / multiplicateur) * distance;

var unites = new Array();
unites["Lancier"] = 18 * minute;
unites["Porteur d'épée"] = 22 * minute;
unites["Hache"] = 18 * minute;
unites["Archer"] = 18 * minute;
unites["Scout"] = 9 * minute;
unites["Cavalier léger"] = 10 * minute;
unites["Archer monté"] = 10 * minute;
unites["Cavalier lourd"] = 11 * minute;
unites["Bélier"] = 30 * minute;
unites["Catapulte"] = 30 * minute;
unites["Paladin"] = 10 * minute;
unites["Noble"] = 35 * minute;


var affichage = "<table class='vis'><tr>" +
    "<th> Lanciers </th>" +
    "<th> Porteurs d'épée </th>" +
    "<th> Guerrier à la hache </th>" +
    "<th> Archers </th>" +
    "<th> Scouts </th>" +
    "<th> Cavaliers légers </th>" +
    "<th> Archers montés </th>" +
    "<th> Cavaliers lourds </th>" +
    "<th> Béliers </th>" +
    "<th> Catapultes </th>" +
    "<th> Paladin </th>" +
    "<th> Nobles </th>" +
    "</tr> <tr>";

for each(temps in unites){
    var temporaire = temps;
    var reste = temporaire;

    var heures = Math.floor(temporaire / 3600);
    reste = reste - (heures * 3600);

    var minutes = Math.floor(reste / 60);
    reste = reste - (minutes * 60);

    var secondes = Math.floor(reste);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    affichage = affichage + "<td>" + heures + ":" + minutes + ":" + secondes + "</td>";
}

affichage = affichage + "</tr></table>";

var arrive = $('#content_value > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(2)')[0].innerHTML.replace(/<.*>/, "");

var help = "[coord]" + source + "[/coord] -> [coord]" + cible + "[/coord] -> " + arrive;

$('#content_value').append(affichage + "</br> " + " <textarea cols = 85>" + help + "</textarea>");
void(0);
