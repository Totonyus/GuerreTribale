// ==UserScript==
// @name       Tribal War automatic template selection
// @match      *.guerretribale.fr/game.php?village=*
// ==/UserScript==

javascript:

    var template = 0000; // Modifier les 0000 par l'id du modèle
    var nom_template = "Template Selector";

$('#template_form').html('<select name="template"><option value=' + template + '>' + nom_template + '</option></select> <input class="btn btn-attack" style="" type="submit" value="Attaque"> ');

var timer = Math.random() * 4000 + 500;

setTimeout("document.forms['template_form'].submit()", timer);