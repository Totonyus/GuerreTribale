// ==UserScript==
// @name       Tribal War automatic template selection
// @match      http://*.guerretribale.fr/game.php?village=*
// ==/UserScript==

javascript:

$('#template_form').html('<select name="template"><option value=3683> Petit pillage </option></select> <input class="btn btn-attack" style="" type="submit" value="Attaque"> ');

var timer = Math.random()*4000 + 500;

setTimeout("document.forms['template_form'].submit()",timer);
