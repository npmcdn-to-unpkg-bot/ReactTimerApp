// Teste 1
function add(a, b) {
 return a + b;
}
expect(add(3,5)).toBeA('number');
console.log('It\'s a number');

// Teste 2
function capitilezWord(word) {
   if (!word || typeof word !== 'string') {
     word = '';
   }
  return word.charAt(0).toUpperCase() + word.slice(1)
}
console.log(capitilezWord('alex'));

// Given alex expect Alex
expect(capitilezWord('alex')).toBe('Alex');
// Given alex expect type to be string
expect(capitilezWord('alex')).toBeA('string');
// Given nothing expect ''
expect(capitilezWord()).toBe('');


console.log('All tests are ok!');
