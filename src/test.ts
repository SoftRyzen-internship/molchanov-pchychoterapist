// test-file.js

var myVar = 42; // Порушує правило "no-var"

function test() {
  let x = 1;
  x = 2;
  console.log('Hello world'); // Порушує правило "semi" (відсутність крапки з комою)
}

const y = 'test'; // Порушує правило "quotes" (використання подвійних лапок замість одинарних)

test();
