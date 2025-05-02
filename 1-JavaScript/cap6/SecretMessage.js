let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//console.log(secretMessage);
console.log(secretMessage.length);
//para retirar el ultimo elemento de un string se utiliza el metodo pop()
secretMessage.pop();
console.log(secretMessage.length);
//console.log(secretMessage);

//agregar al final de la lista
secretMessage.push('to','program');
//console.log(secretMessage);


secretMessage[secretMessage.indexOf('easily')]='right'; //busca el indice de easily y cambia el elemento por right
//console.log(secretMessage);

//retirar el primer item
secretMessage.shift();
//console.log(secretMessage);


//poner el primer item programming
secretMessage.unshift('Programming');
console.log(secretMessage);
console.log(secretMessage.length);

//retirar 5 campos a partir del indice 6 y reemplazar por un string 'know'
secretMessage.splice(6 , 5, 'know');
console.log(secretMessage);
console.log(secretMessage.length);

//unir todo el arreglo en un solo string para formar la frase secreta.
console.log(secretMessage.join(' '));
