<h1>codingame-ascii-art</h1>
practice challenge

<h2>Objectif</h2>
Vous êtes-vous demandé comment il serait possible de simuler cet affichage dans un bon vieux terminal ? Nous oui : avec l'art ASCII !

<h2>Règles</h2>
L'art ASCII permet de représenter des formes en utilisant des caractères. Dans notre cas, ces formes sont précisément des mots

<h2>Mission</h2>
Ecrire un programme capable d'afficher une ligne de texte en art ASCII dans un style qui vous est fourni en entrée.

<h3>Entrée</h3>
Ligne 1 : la largeur L d'une lettre représentée en art ASCII. Toutes les lettres font la même largeur.

Ligne 2 : la hauteur H d'une lettre représentée en art ASCII. Toutes les lettres font la même hauteur.

Ligne 3 : La ligne de texte T, composée de N caractères ASCII

Lignes suivantes : La chaîne de caractères ABCDEFGHIJKLMNOPQRSTUVWXYZ? représentée en art ASCII.

<h3>Sortie</h3>
Le texte T en art ASCII. Les caractères de a à z seront affichés en art ASCII par leur équivalent en majuscule. Les caractères qui ne sont pas dans les intervales [a-z] ou [A-Z], seront affichés par le point d'interrogation en art ASCII.

<h2>Contraintes</h2>
0 < L < 30 0 < H < 30 0 < N < 200
