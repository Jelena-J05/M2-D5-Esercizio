/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (x,y) {
    if (x === y) {
        return (x +y)* 3;
      } else {
        return (x +y);
    }
}
const result1 = crazySum (5,10)
console.log (result1)


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (num) {
    return (num > 20 && num <= 100) || num === 400
    }
const result2 = boundary (30)
console.log (result2)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str1) {
    return str1.split("").reverse().join("");
}
const newString = reverseString ("EPICODE")
console.log (newString)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

      const FinalPhrase= function (str) {
        let text = str.split(" ")
        let finalString = []
        for (let i = 0; i < text.length; i++) {
          let firstLetter = text[i].charAt(0)
          console.log(firstLetter)
          let uppercaseLetter = firstLetter.toUpperCase()
          let cutString = text[i].slice(1)
          let finalText = uppercaseLetter + cutString
          finalString.push(finalText)
        }
        console.log(finalString.join(" "))
      }
      
      FinalPhrase ("This is the fourth exercise")

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
    const Array = []
    for (let i = 0; i <= n; i++) {
      Array.push(Math.floor(Math.random() * 10))
    }
    return Array
  }
  console.log(giveMeRandom(9))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area (l1,l2) {
    return l1 * l2
    }
const areaResult = area (5,10)
console.log (areaResult)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const CrazyDiff = function (num3) {
 if (num3 > 19) {
    return Math.abs (num3 - 19)*3
 } else {
 return Math.abs (num3- 19)
 }
}
console.log (CrazyDiff (7))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const codify=  function (str3) {
 if (str3.startsWith ("code")) {
    return str3
 } else {
    return "code " + str3
 }
}
console.log (codify ("code exercise"))
console.log (codify ("exercise"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (z) {
    if ( z >= 0 && (z % 3 === 0 || z% 7 === 0 )){
    return true;
    } else {
    return false;
    }
}

console.log (check3and7(7))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    const cutString = function (string5) {
    return string5.slice (1, string5.length -1)
    }
    console.log (cutString ("WINDOW"))
