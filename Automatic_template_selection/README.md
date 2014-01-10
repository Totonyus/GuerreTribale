Automatic template selection
==============

Introduction
------------

Ce script est un *userscript* ([installation d'un *userscript*](../README.md#Userscript))

Ce script est prévu pour une utilisation intermitante et sera donc, la plupart du temps, désactivé.

Il peut être particulièrement utile pour l'envoi rapide de *fausses attaques* ou pour le pillage des villages barbares pour les joueurs *ne disposant pas du gestionnaire de pillage*.

Installation
------------

Pour faire fonctionner ce script, vous devez le modifier selon les instructions suivantes.

* vous devez créer un *modèle de troupes* (depuis le point de ralliement);
* vous devez connaitre *l'id* du modèle de troupes. Pour celà vous devez afficher le code source de la page de description d'un village et trouver une ligne semblable à celle-ci :

    <code>\<option value="5003"\>Muraille\</option\></code>

Ici, mon *modèle de troupes* appelé *Muraille* porte l'id *5003*.

* vous devez modifier le script de la sorte :

    <code>var template = 0000; // Modifier les 0000 par l'id du modèle</code>

Utilisation
-----------

Ce script permet d'utiliser automatiquement un *modèle de troupes*. Il suffit de se rendre sur la page d'un village pour que le modèle soit automatiquement sélectionné puis validé après un délai aléatoire de quelques secondes. Il reste ensuite à valider ou non l'attaque.

