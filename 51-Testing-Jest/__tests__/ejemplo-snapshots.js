const cliente = {
  nombre: 'Marco Ruv',
  balance: 500,
  tipo: 'Premium',
};

describe('Testing al cliente', () => {
  test('Es Marco Ruvalcaba', () => {
    expect(cliente).toMatchSnapshot();
  });
});
