//===============================================//
/*
var compteur;

compteur = 0;

while (compteur <= 100)
{

    document.write("Je maitrîse les boucles !" + "<br>");
    compteur ++;
}
 */
//==================================================//

/*
var decompte;

decompte = 100;

while (decompte <=100 && decompte >= 55){
    document.write(decompte + "<br>");
    decompte --;
}
 */
//====================================================//

/*
var nombre;

nombre=0

while (nombre <= 10000){
    document.write(nombre + "<br>");
    nombre +=2 ;
}
 */
//===================================================//

/*
var decompte;
var compte;

compte = 0;
decompte = 20;

while (compte <= 10){

    while (decompte >=2 && decompte <= 20){

        document.write(decompte + "<br>");
        decompte --;
    }
    decompte = 20;
    compte ++;
}
 */
//=====================================================//
/*
var compte;
var txt;

txt = "C'est long!";
compte=0;

while (compte <= 100000){
    document.write(txt + "<br>");
    compte ++;
}

 */

//=====================================================//
/*
var compte;


compte=0;

while (compte <= 100000){
    compte ++;
}
*/

//================================================//

var compte;
var nbr;
var cmpt1;
var cmpt0;

compte = 1;
cmpt0 = 0;
cmpt1 = 0;

while ( compte <= 100){
    nbr = Math.floor(Math.random() * 2);
    document.write( +nbr );
    if (nbr === 0){
        cmpt0 ++;
    }
    else {
        cmpt1 ++;
    }

    compte ++;

}
document.write("<br>"+ " Compte de 0 est: " +cmpt0 + "<br>");
document.write("compte de 1 est :  " +cmpt1 + "<br>");