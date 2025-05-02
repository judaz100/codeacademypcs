//my-app.js
console.log(process.env.PWD);

const generateTarget = () => {
    return Math.floor(Math.random()*10);
}

console.log(generateTarget());