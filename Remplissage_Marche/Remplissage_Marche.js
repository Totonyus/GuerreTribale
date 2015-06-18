// ==UserScript==
// @name Remplissage Marché
// @include *.guerretribale.fr/game.php?village=*market*
// ==/UserScript==

javascript:
    var res = {
        wood: 28000,
        stone: 30000,
        iron: 25000,
    };

$(document).ready(function () {
    Market.Set.maxRes(res);
});

Market.Modes.send.insertMax('wood');
Market.Modes.send.insertMax('stone');
Market.Modes.send.insertMax('iron');

void(0);

