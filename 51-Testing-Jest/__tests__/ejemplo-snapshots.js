const cliente = {
    nombre: 'José Miguel Izquierdo',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Es José Miguel', () => {
        expect(cliente).toMatchSnapshot();
    });
});