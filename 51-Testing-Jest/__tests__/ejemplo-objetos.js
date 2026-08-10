const cliente = {
    nombre: 'José Miguel',
    balance: 500
}

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es José Miguel', () => {
        expect(cliente.nombre).toBe('José Miguel');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 400', () => {
        expect(cliente.balance).not.toBe(400)
    });
});