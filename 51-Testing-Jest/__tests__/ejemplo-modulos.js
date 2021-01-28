import { suma } from '../js/funciones.js';

describe('Suma de 2 números', () => {
  test('Sumar 2 y 6', () => {
    expect(suma(2, 6)).toBe(8);
  });
});
