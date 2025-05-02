/*a continuacion se puede ver que un arreglo definido dentro de let puede ser modificado en su interior y demas.
mientras un array definido en const puede cambiar sus elementos pero no puede redefinirse por completo.
*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments=['Mayo'];
console.log(condiments);

utensils[3]='Spoon';
console.log(utensils);
utensils=['Spoon'];
console.log(utensils);