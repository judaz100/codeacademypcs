/*Existe algo llamado loops anidados lo que significa que tenenmos un loop corriendo dentro de otro loop
estos son usados para comparar elementosde dos arreglos.*/

const bobsFollowers = ['Carlos' ,  'Rosa' , 'Rodrigo' , 'Pedro'];
const tinasFollowers = ['Maria' , 'Rosa' , 'Pedro'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length ; i++) {
  for(let j = 0 ; j < tinasFollowers.length ; j++) {
    if (bobsFollowers[i] === tinasFollowers [j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);
