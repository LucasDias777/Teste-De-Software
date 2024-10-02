import { ePalindromo } from './palindromo';

describe('ePalindromo', () => {
  test('deve retornar true para um palíndromo simples', () => {
    expect(ePalindromo('arara')).toBe(true);
  });

  test('deve retornar true para um palíndromo com letras maiúsculas e espaços', () => {
    expect(ePalindromo('A man a plan a canal Panama')).toBe(true);
  });

  test('deve retornar false para uma string que não é um palíndromo', () => {
    expect(ePalindromo('hello')).toBe(false);
  });

  test('deve retornar true para uma string vazia', () => {
    expect(ePalindromo('')).toBe(true);
  });
});
