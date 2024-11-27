import { addArray, sum } from '@/helpers/sum';
import { expect, test } from 'vitest';

test('adss 1+2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sumar array 5+5+5 igual a 15 ', () => {
  expect(addArray([5, 5, 5])).toBe(15);
});

// test('adss 1+2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
// test('adss 1+2 to equal 3', () => {
//   //preparacion
//   const a = 1;
//   const b = 4;
//   //estimulo
//   const result = sum(a + b);
//   //comportamiento esperado
//   expect(result).toBe(5);
// });
