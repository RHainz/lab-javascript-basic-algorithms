// Iteration 1: Names and Input
console.clear ();

const hacker1 = "Rorpheus";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mr. Nightmare";

console.log(`The driver's name is ${hacker2}`);



// Iteration 2: Conditionals

let longerH1=true;  // longerName diz que hacker1 tem nome maior;
let equals=false;

if (hacker1.length<hacker2.length) {
    longerH1=false; // Como hacker1 é menor que hacker2, então hacker1 vira false;
} else if (hacker1.length===hacker2.length) {
    equals=true; // diz que os nomes tem o mesmo tamanho;
}

console.log (longerH1);
console.log (equals);

if (equals) { // Verifica primeiro se os nomes são iguais
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`); 
} else if (longerH1) { // Verifica se o nome hacker1 é maior
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else { // Assume que os nomes não são iguais e hacker1 não é maior. Não verifica se há alguma irregularidade.
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}



// Iteration 3: Loops

let hacker1Maius=""; // Cria uma variável para cada nome.
let hacker2Maius="";

for (let i=0;i<hacker1.length;i++){ // cria um loop que tem o tamanho da string.
    hacker1Maius+=hacker1.charAt(i)+" "; // a cada iteração é acrescentado na variável a letra da posição e um string " "
}

console.log(hacker1Maius.toUpperCase()); // mostra a variavel em letras maiusculas.

for (let i=0;i<hacker2.length;i++){
    hacker2Maius+=hacker2.charAt(i)+" ";
}

console.log(hacker2Maius.toUpperCase());


let hacker1Inv=""  // Cria variavel do nome invertido

for (let i=(hacker1.length-1);i>-1;i--){  // Cria um loop que vai do maior indice até 0
    hacker1Inv+=hacker1.charAt(i); // Acrescenta o indice da string na variavel do nome invertido
}

console.log(hacker1Inv); // Mostra a variavel do nome invertido.


let hacker2Inv=""  // Cria variavel do nome invertido

for (let i=(hacker2.length-1);i>-1;i--){  // Cria um loop que vai do maior indice até 0
    hacker2Inv+=hacker2.charAt(i); // Acrescenta o indice da string na variavel do nome invertido
}

console.log(hacker2Inv); // Mostra a variavel do nome invertido.

if  (hacker1<hacker2) {      // Compara as strings lexicalmente. Se hacker1 é menor então executa.
    console.log(`The driver's name goes first.`);  // Retorna a variavel hacker1.
} else if (hacker1>hacker2) {  // Compara as strings lexicalmente. Se hacker1 é maior então executa.
    console.log(`Yo, the navigator goes first definitely.`)
} else { // Sem pestanejar, aceita qualquer coisa e retorna abaixo.
    console.log(`What?! You both have the same name?`)
}

// Há possibilidade de usar comando locale.compare


// Bônus 1

let loremIpsum = "Lorem ipsum dolor sit amet, et, consectetur adipiscing elit. Curabitur non purus consectetur, vestibulum orci vitae, lacinia tellus. Cras tincidunt, diam vel tempus faucibus, mauris nulla auctor velit, vitae fermentum arcu libero ut orci. Vivamus tristique varius laoreet. Fusce gravida, nunc ut pellentesque feugiat, justo turpis porttitor turpis, et ornare ante mi ac ligula. Mauris venenatis magna sapien, eu viverra lorem maximus vel. Nam cursus tristique mi nec dictum. Nunc tincidunt elit sit amet viverra laoreet. Nulla facilisi. Sed vestibulum cursus nisl. Praesent vitae purus eu velit ultricies commodo non eget libero. Duis congue libero quis finibus eleifend. Ut mollis urna at nisl vulputate, a facilisis elit gravida. // Etiam vitae placerat augue, vel faucibus nunc. Phasellus quis lacus non magna vehicula bibendum. Quisque ac varius mauris, sit amet pulvinar urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pretium dolor quis lacinia semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at erat mollis, sollicitudin elit ac, accumsan dui. Cras condimentum urna iaculis, sollicitudin lacus sed, tristique velit. Curabitur eget consequat mi, nec dapibus massa. Pellentesque elementum, orci sed consectetur tempus, diam augue tristique erat, non consequat lorem ex eu eros. Pellentesque maximus nunc sed erat luctus eleifend. Vivamus mollis pretium leo. Phasellus mollis convallis lacus sed consectetur. Nam ut elementum justo. // Aliquam erat volutpat. Cras luctus imperdiet euismod. Pellentesque eu felis eu magna sagittis dapibus. Suspendisse congue consequat orci vel bibendum. Aenean euismod arcu in sem feugiat placerat. Quisque venenatis pharetra ex. In vulputate congue dui vitae varius. Maecenas nisl leo, condimentum mollis imperdiet et, aliquet at elit. Mauris luctus volutpat elit eu viverra. Vivamus vulputate a dui sit amet imperdiet. Duis varius libero id ipsum ullamcorper rhoncus."

// console.log(loremIpsum);

// let words=loremIpsum.split(" "); // metodo com array.
// console.log(words.length); // metodo com array.

let palavras=0;  // Inicializa contador de palavras.

if (loremIpsum!=="" && loremIpsum!==" ") { // verifica se a string está vazia.
    palavras=1; // se a string não estiver vazia, atribui uma palavra.
} else{
    palavras=0; // string vazia, inicia com 0 palavras.
}

//for (let i=0;i<=loremIpsum.length;i++){   // inicia contador que vai de 0 até o tamanho da string.
//    if (loremIpsum.charAt(i)===" ") { // verifica se existe um espaço na string. Assume que palavras são divididas por espaço. Dá erro em strings só com espaço.
//        palavras ++; // Soma 1 na quantidade de palavras. 
//    }
//}

console.log(palavras);  // exibe a quantidade de palavras.


for (let i=0;i<=loremIpsum.length;i++){   // inicia contador que vai de 0 até o tamanho da string.
    if (loremIpsum.charAt(i)===" " && (loremIpsum.charAt(i+1)!==" " && (typeof loremIpsum.charAt(i+1)!==undefined))) { // verifica se existe um espaço na string. Assume que palavras são divididas por espaço. Verifica se há um espaço vazio na string seguinte ou um undefined e se for false, aceita como separador de palavras.
        palavras ++; // Soma 1 na quantidade de palavras. 
    }
}

console.log(palavras);  // exibe a quantidade de palavras.


let etCounter=0;

for (let i=0;i<=loremIpsum.length;i++){   // inicia contador que vai de 0 até o tamanho da string.
    if (loremIpsum.charAt(i)==="e" && loremIpsum.charAt(i+1)==="t" && loremIpsum.charAt(i-1)===" " && loremIpsum.charAt(i+2)===" ") { 
        etCounter ++; // Soma 1 na quantidade de palavras. 
    }
}

console.log(etCounter);

let etCounter2=0;


for (let i=0;i<=loremIpsum.length;i++){   
    if(loremIpsum.charAt(i)==="e" && loremIpsum.charAt(i+1)==="t" && loremIpsum.charAt(i-1)===" "){
        switch(loremIpsum.charAt(i+2)){  // procura casos especiais onde o caracter pode ser diferente de espaço.
            case " ":
            case ";":
            case ",":
            case "!":
            case ".":
            etCounter2++;  // Em caso positivo para qualquer um desses caracteres soma 1 no counter.
            break;
        }
    }
}


console.log(etCounter2);


// loremIpsum.includes()); // metodo com array.
// console.log(words.length); // metodo com array.






// Bonus 2:


let phraseToCheck="Was it a car or a cat I saw?";




let invphrase=phraseToCheck.split("").reverse().join();

invphrase=invphrase.replaceAll(" ","");
invphrase=invphrase.replaceAll(",","");
console.log(invphrase);

phraseToCheck=phraseToCheck.replaceAll(" ","");
phraseToCheck=phraseToCheck.replaceAll(",","");
console.log(phraseToCheck);

if (phraseToCheck===invphrase){
    console.log("Palidromo!!")
}




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