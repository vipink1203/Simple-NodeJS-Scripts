const args = process.argv.slice(2);
let [name] = args;
hi(name);

function hi(name){
    return (name) ? console.log('Hello', name) : console.log('Please enter your name as argument');
} 
