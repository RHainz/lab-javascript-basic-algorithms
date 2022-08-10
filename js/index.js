// Iteration 1: Names and Input
console.clear ();

const hacker1 = "Rorpheus";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mr. Nightmare";

console.log(`The driver's name is ${hacker2}`);



// Iteration 2: Conditionals

let longerH1=true;                                  // longerName diz que hacker1 tem nome maior;
let equals=false;

if (hacker1.length<hacker2.length) {
    longerH1=false;                                 // Como hacker1 é menor que hacker2, então hacker1 vira false;
} else if (hacker1.length===hacker2.length) {
    equals=true;                                    // diz que os nomes tem o mesmo tamanho;
}

console.log (longerH1);
console.log (equals);

if (equals) {                                                                                           // Verifica primeiro se os nomes são iguais
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`); 
} else if (longerH1) {                                                                                  // Verifica se o nome hacker1 é maior
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else {                                                                                                // Assume que os nomes não são iguais e hacker1 não é maior. Não verifica se há alguma irregularidade.
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}



// Iteration 3: Loops

let hacker1Maius="";                        // Cria uma variável para cada nome.
let hacker2Maius="";

for (let i=0;i<hacker1.length;i++){         // cria um loop que tem o tamanho da string.
    hacker1Maius+=hacker1.charAt(i)+" ";    // a cada iteração é acrescentado na variável a letra da posição e um string " "
}

console.log(hacker1Maius.toUpperCase());    // mostra a variavel em letras maiusculas.

for (let i=0;i<hacker2.length;i++){
    hacker2Maius+=hacker2.charAt(i)+" ";
}

console.log(hacker2Maius.toUpperCase());


let hacker1Inv=""                               // Cria variavel do nome invertido

for (let i=(hacker1.length-1);i>-1;i--){        // Cria um loop que vai do maior indice até 0
    hacker1Inv+=hacker1.charAt(i);              // Acrescenta o indice da string na variavel do nome invertido
}

console.log(hacker1Inv);                        // Mostra a variavel do nome invertido.


let hacker2Inv=""                               // Cria variavel do nome invertido

for (let i=(hacker2.length-1);i>-1;i--){        // Cria um loop que vai do maior indice até 0
    hacker2Inv+=hacker2.charAt(i);              // Acrescenta o indice da string na variavel do nome invertido
}

console.log(hacker2Inv);                        // Mostra a variavel do nome invertido.



//  Loops - Parte 2


if  (hacker1<hacker2) {                                         // Compara as strings lexicalmente. Se hacker1 é menor então executa.
    console.log(`The driver's name goes first.`);               // Retorna a variavel hacker1.
} else if (hacker1>hacker2) {                                   // Compara as strings lexicalmente. Se hacker1 é maior então executa.
    console.log(`Yo, the navigator goes first definitely.`)
} else {                                                        // Sem pestanejar, aceita qualquer coisa e retorna abaixo.
    console.log(`What?! You both have the same name?`)
}

// Há possibilidade de usar comando locale.compare


// Bônus 1

let loremIpsum = "Lorem loremm lorem! lorem, lorem. ipsum dolor sit amet, et, consectetur adipiscing elit. Curabitur non purus consectetur, vestibulum orci vitae, lacinia tellus. Cras tincidunt, diam vel tempus faucibus, mauris nulla auctor velit, vitae fermentum arcu libero ut orci. Vivamus tristique varius laoreet. Fusce gravida, nunc ut pellentesque feugiat, justo turpis porttitor turpis, et ornare ante mi ac ligula. Mauris venenatis magna sapien, eu viverra lorem maximus vel. Nam cursus tristique mi nec dictum. Nunc tincidunt elit sit amet viverra laoreet. Nulla facilisi. Sed vestibulum cursus nisl. Praesent vitae purus eu velit ultricies commodo non eget libero. Duis congue libero quis finibus eleifend. Ut mollis urna at nisl vulputate, a facilisis elit gravida. // Etiam vitae placerat augue, vel faucibus nunc. Phasellus quis lacus non magna vehicula bibendum. Quisque ac varius mauris, sit amet pulvinar urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pretium dolor quis lacinia semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at erat mollis, sollicitudin elit ac, accumsan dui. Cras condimentum urna iaculis, sollicitudin lacus sed, tristique velit. Curabitur eget consequat mi, nec dapibus massa. Pellentesque elementum, orci sed consectetur tempus, diam augue tristique erat, non consequat lorem ex eu eros. Pellentesque maximus nunc sed erat luctus eleifend. Vivamus mollis pretium leo. Phasellus mollis convallis lacus sed consectetur. Nam ut elementum justo. // Aliquam erat volutpat. Cras luctus imperdiet euismod. Pellentesque eu felis eu magna sagittis dapibus. Suspendisse congue consequat orci vel bibendum. Aenean euismod arcu in sem feugiat placerat. Quisque venenatis pharetra ex. In vulputate congue dui vitae varius. Maecenas nisl leo, condimentum mollis imperdiet et, aliquet at elit. Mauris luctus volutpat elit eu viverra. Vivamus vulputate a dui sit amet imperdiet. Duis varius libero id ipsum ullamcorper rhoncus."

// console.log(loremIpsum);

// let words=loremIpsum.split(" "); // metodo com array.
// console.log(words.length); // metodo com array.


// Resolução do Bônus 1 - Parte 1

let palavras=0;                                     // Inicializa contador de palavras.

if (loremIpsum!=="" && loremIpsum!==" ") {          // verifica se a string está vazia.
    palavras=1;                                     // se a string não estiver vazia, atribui uma palavra.
} else{
    palavras=0;                                     // string vazia, inicia com 0 palavras.
}

//for (let i=0;i<=loremIpsum.length;i++){   // inicia contador que vai de 0 até o tamanho da string.
//    if (loremIpsum.charAt(i)===" ") { // verifica se existe um espaço na string. Assume que palavras são divididas por espaço. Dá erro em strings só com espaço.
//        palavras ++; // Soma 1 na quantidade de palavras. 
//    }
//}

console.log(palavras);                              // exibe a quantidade de palavras.



// Resolução do Bônus 1 - 2o Método


for (let i=0;i<=loremIpsum.length;i++){                                                                                         // inicia contador que vai de 0 até o tamanho da string.
    if (loremIpsum.charAt(i)===" " && (loremIpsum.charAt(i+1)!==" " && (typeof loremIpsum.charAt(i+1)!==undefined))) {          // verifica se existe um espaço na string. Assume que palavras são divididas por espaço. Verifica se há um espaço vazio na string seguinte ou um undefined e se for false, aceita como separador de palavras.
        palavras ++;                                                                                                            // Soma 1 na quantidade de palavras. 
    }
}

console.log(palavras);                                                                                                          // exibe a quantidade de palavras.



// Resoluções do Bônus 1 - Parte 2


// Forma 1 de fazer et !

let etCounter=0;

for (let i=0;i<=loremIpsum.length;i++){                                                                                                        // inicia contador que vai de 0 até o tamanho da string.
    if (loremIpsum.charAt(i)==="e" && loremIpsum.charAt(i+1)==="t" && loremIpsum.charAt(i-1)===" " && loremIpsum.charAt(i+2)===" ") {          // Faz 4 comparações em 4 pontos diferentes da array. Se a array possui um e na posição 1, um t na posição 2 e espaços nas posições -1 e +2. ex. " "et" " - a letra e está na posição 1.
        etCounter ++;                                                                                                                          // Soma 1 na quantidade de palavras. 
    }
}

console.log(etCounter);

// Forma 2 de fazer et !

let etCounter2=0;                                                                                       // Cria contador

for (let i=0;i<=loremIpsum.length;i++){                                                                 // faz loop até o final da variavel
    if(loremIpsum.charAt(i)==="e" && loremIpsum.charAt(i+1)==="t" && loremIpsum.charAt(i-1)===" "){     // compara as três primeiras posições, -1, 1 e 0 para ver se combinam com espaço, letra e e letra t.
        switch(loremIpsum.charAt(i+2)){                                                                 // procura casos especiais onde o caracter pode ser diferente de espaço.
            case " ":
            case ";":
            case ",":
            case "!":
            case ".":
            etCounter2++;                                                                               // Em caso positivo para qualquer um desses caracteres soma 1 no counter.
            break;
        }
    }
}


console.log(etCounter2);



// Forma 3 de fazer et !

let minLorem=loremIpsum.toLowerCase();   // transforma em lower case
let arrayLorem= minLorem.split(" ");     // separa em array
let contador=0;                          // seta contador
let palavraLorem="et";                   // define palavra a ser procurada

for (let i=0;i<arrayLorem.length; i++) {                                                        //inicia loop de tamanho da array
    if(arrayLorem[i].includes(palavraLorem) && arrayLorem[i].length<=(palavraLorem+1).length){  // verifica se o array atual tem a palavra e se é menor ou igual a palavra escolhida + 1 caracter (pode ser que contenha caracteres especiais)
        let stringando=arrayLorem[i].toString();                                                // transforma a array atual em um string
        let reduzindo=stringando.substring((stringando.length-1));                              // retorna a ultima letra da string que foi gerada da array
        let patern=/[^a-z]|\s/g;                                                                // cria padrão Regex que nos interessa. Está com um \s, mas creio que é desnecessario.
        // console.log(stringando);
        // console.log(stringando.length);
        // console.log(reduzindo);
        if(patern.test(reduzindo) || stringando.length<(palavraLorem+1).length) {               // Verifica se o ultimo caracter é especial ou se não existe. Se a palavra for menor que a palavra com +1 significa que ela bate com a palavra procurada e não com palavras com mais letras. Ex. amazon e amazonia.
            console.log ("Ahá!!!");                                                             // retorna felicidade inconteste de ter achado uma palavra procurada
            contador++;                                                                         // Aumenta o contador em 1
        }
    }
}

console.log(contador);                                                                          // mostra a quantidade de palavras procuradas na string. 



// Bonus 2:


let phraseToCheck="Tá Dá !!! Palindromo, omordnilap !!! áD áT";                 // frase a ser checada.
let phraseFinal=phraseToCheck.toLowerCase().replaceAll(/[^a-z]/g,"").split();   // pega a frase a ser checada, transforma em minuscula, substitui qualquer simbolo diferente de a-z, transforma em array.

console.log(phraseFinal);

console.log(phraseFinal.reverse());

if (phraseFinal===phraseFinal.reverse()) {                                      // pega a array phrasefinal e compara com o inverso da mesma array.
    console.log ("Tá Dá !!! Palindromo, omordnilap !!! áD áT");                 // Em caso de true, retorna que é um palíndromo. 
}




// Anotações e outras iterações. 

/*
let minLorem=loremIpsum.toLowerCase();
let arrayLorem= minLorem.split(" ");
let contador=0;
let palavraLorem="et";

//console.log(arrayLorem.includes(palavraLorem));
//console.log("tada");

//let stringando=arrayLorem[1].toString();
//let reduzindo=stringando.substring((stringando.length-1));
//let arraiando=[reduzindo];

//console.log(stringando);

//console.log(reduzindo);
//console.log(arraiando);

for (let i=0;i<arrayLorem.length; i++) {
    if(arrayLorem[i].includes(palavraLorem) && arrayLorem[i].length<=(palavraLorem+1).length){
        let stringando=arrayLorem[i].toString();
        let reduzindo=stringando.substring((stringando.length-1));
        let patern=/[^a-z]|\s/g;
        // console.log(stringando);
        // console.log(stringando.length);
        // console.log(reduzindo);
        if(patern.test(reduzindo) || stringando.length<(palavraLorem+1).length) {
            console.log ("Ahá!!!");
            contador++;    
        }
    }
}

console.log(contador);
*/


// loremIpsum.includes()); // metodo com array.
// console.log(words.length); // metodo com array.




/*
phraseFinal=phraseToCheck.replaceAll(/[^a-z]/g,"");
console.log(phraseFinal);

//if(phraseFinal.split()===phraseFinal.split().reverse()) {
//    console.log ("Tá Dá !!! Palindromo, omordnilap !!! áD áT");
//}

/*
let invphrase=phraseToCheck.split("").reverse().join();

invphrase=invphrase.replaceAll(" ","");
invphrase=invphrase.replaceAll(",","");
console.log(invphrase);

phraseToCheck=phraseToCheck.replaceAll(" ","");
phraseToCheck=phraseToCheck.replaceAll(",","");
console.log(phraseToCheck);

if (phraseToCheck===invphrase){
    console.log("Palidromo!!")
} */




/*
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon". */