// ==UserScript==
// @name Dynamic impact
// @include http://*.guerretribale.fr/game.php?village=*
// ==/UserScript==

javascript:
var time = $('table.vis tr:contains("Durée")').text().match(/\d{1,3}:\d{2}:\d{2}/).toString();
var statique = $('#date_arrival').text();

timeDyn(time);
void(0);

function timeDyn(time) {
    var strTime=$('#serverTime').text();
    var timeArray = strTime.split(':');
    var travArray = time.split(':');
    var H = parseInt(timeArray[0], 10) + parseInt(travArray[0], 10);
    var M = parseInt(timeArray[1], 10) + parseInt(travArray[1], 10);
    var S = parseInt(timeArray[2], 10) + parseInt(travArray[2], 10);
    
    var Hr = H + parseInt(travArray[0], 10);
    var Mr = M + parseInt(travArray[1], 10);
    var Sr = S + parseInt(travArray[2], 10);
    
    var Nbjours = 0;
    var NbjoursR = 0;
    
    if(S >= 60)	{M += 1;S -= 60;}
    if (S < 10)	{S = "0" + S;}
    if(M >= 60)	{H += 1;M -= 60;}
    if (M<10)	{M = "0" + M;}
    while (H >=24)	{H -= 24; Nbjours++;}
    if (H < 10)	{H = "0" + H}
        
    while(Sr >= 60)	{Mr += 1;Sr -= 60;}
    if (Sr < 10)	{Sr = "0" + Sr;}
    while(Mr >= 60)	{Hr += 1;Mr -= 60;}
    if (Mr<10)	{Mr = "0" + Mr;}
    while (Hr >=24)	{Hr -= 24; NbjoursR++;}
    if (Hr < 10)	{Hr = "0" + Hr;}
    
    $('#date_arrival').html('<tr><td>Statique :</td><td>' +statique+ '</td></tr><tr><td> Dynamique : </td> <td>'+Nbjours+' jour(s), '+H+':'+M+':'+S+'</td></tr><tr><td>Retour : </td><td>' + (NbjoursR) + ' jour(s), ' +Hr+ ':' +Mr+ ':'+Sr);

    setTimeout(function() {
        timeDyn(time);
    }, 100);
    
}