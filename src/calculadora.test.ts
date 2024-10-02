import { Calculadora } from './calculadora';

describe('Calculadora', () => {
  const calc = new Calculadora();

  test('deve somar dois números', () => {
    expect(calc.soma(2, 3)).toBe(5);
  });

  test('deve subtrair dois números', () => {
    expect(calc.subtracao(5, 3)).toBe(2);
  });

  test('deve multiplicar dois números', () => {
    expect(calc.multiplicacao(2, 3)).toBe(6);
  });

  test('deve dividir dois números', () => {
    expect(calc.divisao(6, 3)).toBe(2);
  });

  test('deve lançar erro ao dividir por zero', () => {
    expect(() => calc.divisao(6, 0)).toThrow('Divisão por zero não é permitida.');
  });
});
