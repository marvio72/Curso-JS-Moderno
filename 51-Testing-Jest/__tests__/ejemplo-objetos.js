const cliente = {
  nombre: 'Marco Ruvalcaba',
  balance: 500,
};

describe('Testing al cliente', () => {
  test('El cliente es premiun', () => {
    expect(cliente.balance).toBeGreaterThan(400);
  });

  test('Es Marco Ruvalcaba', () => {
    expect(cliente.nombre).toBe('Marco Ruvalcaba');
  });

  test('No es otro cliente', () => {
    expect(cliente.nombre).not.toBe('Pedro');
  });

  test('No tiene 500', () => {
    expect(cliente.balance).not.toBe(300);
  });
});
