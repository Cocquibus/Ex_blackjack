//déclaration de variables
let deck_melange = [];
let deckDonne = [];
let playerCroupier = [];
let playerUn = [];
let playerDeux = [];
let playerTrois = [];
let playerQuatre = [];
//mélange de cartes et remplissage du tableaux deck_melange
function melange() {
    const deckconst = ["as", "as", "as", "as", "1", "1", "1", "1", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K", "K", "K", "K"];
    let deck_non_melange = deckconst;
    let nbrCartes = deck_non_melange.length;
    for (i = 0; i < nbrCartes; i++) {
        let tirageAlea = Math.floor(Math.random() * nbrCartes);
        if (deck_non_melange[tirageAlea] == undefined) {
            i--;
        }
        else {
            deck_melange.splice(i, 0, deck_non_melange[tirageAlea]);
            deck_non_melange.splice(tirageAlea, 1);
        }
    }
    deckDonne = deck_melange;
    deck_melange = [];
}
// ---JEUX---
function donne() {
    for (i = 0, j = 0; i < 10; i++) {
        playerUn[j] = deckDonne[i];
        i++;
        playerDeux[j] = deckDonne[i];
        i++;
        playerTrois[j] = deckDonne[i];
        i++;
        playerQuatre[j] = deckDonne[i];
        i++;
        playerCroupier[j] = deckDonne[i];
        i++;
        j++;
    }
    document.querySelector(".croupier").innerHTML = "Croupier: " + playerCroupier;
    document.querySelector(".j1").innerHTML = "joueur 1: " + playerUn;
    document.querySelector(".j2").innerHTML = "joueur 2: " + playerDeux;
    document.querySelector(".j3").innerHTML = "joueur 3: " + playerTrois;
    document.querySelector(".j4").innerHTML = "joueur 4: " + playerQuatre;
}