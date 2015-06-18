// ==UserScript==
// @name Tribal War reports
// @include *.guerretribale.fr/game.php?village=*&mode=all&view=*&screen=report
// ==/UserScript==

javascript:

    function buildTableAtt(troupesAtt, pertesAtt) {
        var stringTroupesAtt = "";
        var stringPertesAtt = "";

        for (var i = 1; i < troupesAtt.length; i++) {
            stringTroupesAtt += troupesAtt[i].innerHTML + "[|]";
        }

        for (var i = 1; i < pertesAtt.length; i++) {
            stringPertesAtt += pertesAtt[i].innerHTML + "[|]";
        }

        var temp = "[table]\n";
        var troupesIcones =
            "[*][unit]spear[/unit][|][unit]sword[/unit][|][unit]axe[/unit][|][unit]spy[/unit][|][unit]light[/unit][|]" +
            "[unit]heavy[/unit][|][unit]ram[/unit][|][unit]catapult[/unit][|][unit]knight[/unit][|][unit]snob[/unit]";

        temp += troupesIcones;
        temp += "\n[*]" + stringTroupesAtt.substring(stringTroupesAtt.length - 3, stringTroupesAtt);
        temp += "\n[*]" + stringPertesAtt.substring(stringPertesAtt.length - 3, stringPertesAtt);
        temp += "\n[/table]";
        return temp;
    }

function buildTableDeff(troupesDeff, pertesDeff) {
    var stringTroupesDeff = "";
    var stringPertesDeff = "";

    for (var i = 1; i < troupesDeff.length; i++) {
        stringTroupesDeff += troupesDeff[i].innerHTML + "[|]";
    }

    for (var i = 1; i < pertesDeff.length; i++) {
        stringPertesDeff += pertesDeff[i].innerHTML + "[|]";
    }

    var temp = "[table]\n";
    var troupesIcones =
        "[*][unit]spear[/unit][|][unit]sword[/unit][|][unit]axe[/unit][|][unit]spy[/unit][|][unit]light[/unit][|]" +
        "[unit]heavy[/unit][|][unit]ram[/unit][|][unit]catapult[/unit][|][unit]knight[/unit][|][unit]snob[/unit][|][unit]militia[/unit]";

    temp += troupesIcones;
    temp += "\n[*]" + stringTroupesDeff.substring(stringTroupesDeff.length - 3, stringTroupesDeff);
    temp += "\n[*]" + stringPertesDeff.substring(stringPertesDeff.length - 3, stringPertesDeff);
    temp += "\n[/table]";
    return temp;
}

var page = $('#content_value');

var titre = $('table.vis > tbody > tr > th > span > span > span')[0].innerHTML.match(/\S+.*/);

var heure = $('#content_value > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)');
var date = heure[0].innerHTML.replace(/<.*>/, "").match(/\S.*/);

var morale = $('div.report_transparent_overlay > h4')[1].innerHTML.match(/\d.*/);

var chance = $('#attack_luck > tbody > tr > td.nobg > b')[0].innerHTML;

var joueurAttaquant = $('#attack_info_att > tbody > tr > th')[1].innerHTML.replace(/<\/a>/, "").replace(/<.*>/, "");
var joueurDefenseur = $('#attack_info_def > tbody > tr > th')[1].innerHTML.replace(/<\/a>/, "").replace(/<.*>/, "");

var villageAttaquant = $('#attack_info_att > tbody > tr > td > span > a')[0].innerHTML.match(/\(\d+\|\d+\)/);
var villageDefenseur = $('#attack_info_def > tbody > tr > td > span > a')[0].innerHTML.match(/\(\d+\|\d+\)/);

var troupesAtt = $('#attack_info_att_units > tbody > tr:nth-child(2) > td');
var pertesAtt = $('#attack_info_att_units > tbody > tr:nth-child(3) > td');
var paladin = $('#attack_info_att > tbody > tr:nth-child(4) > td');

var stringPala = "";

if (paladin.length > 0) {
    stringPala = paladin[0].innerHTML.trim();
}

var troupesDeff = $('#attack_info_def_units > tbody > tr:nth-child(2) > td');
var pertesDeff = $('#attack_info_def_units > tbody > tr:nth-child(3) > td');


var pillage = $('#attack_results > tbody > tr > td > span');
var recapPillage = "";

if (pillage.length != 0) {
    var pillageBois = pillage[0].innerHTML.replace(/<.*>/, "");
    var pillageArgile = pillage[1].innerHTML.replace(/<.*>/, "");
    var pillageFer = pillage[2].innerHTML.replace(/<.*>/, "");

    var totalPillage = $('#attack_results > tbody > tr > td:nth-child(3)')[0];

    recapPillage = "\nPillage : [building]wood[/building]" + pillageBois +
        " [building]stone[/building] " + pillageArgile + " [building]iron[/building] : " + pillageFer +
        " Total : " + totalPillage.innerHTML.replace(/<\/span>/g, "").replace(/<span class="grey">/g, "");
}

var texteForum = "<textarea cols='70' rows='20' id='partage'>" +
    "[b]" + titre + "[/b]" + " " + date +
    "\n[spoiler]" +
    "\nMoral : " + morale +
    "\nChance : " + chance +
    "\n" +
    "\nAttaquant : [player]" + joueurAttaquant + "[/player] : [coord]" + villageAttaquant + "[/coord]" +
    "\n" + buildTableAtt(troupesAtt, pertesAtt) +
    stringPala +
    "\n" +
    "\nDefenseur : [player]" + joueurDefenseur + "[/player] : [coord]" + villageDefenseur + "[/coord]" +
    "\n" + buildTableDeff(troupesDeff, pertesDeff) +
    "\n" + recapPillage +
    "\n[/spoiler]" +
    "</textarea>";

page.append(texteForum);
void(0);


